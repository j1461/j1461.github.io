using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet
{
  public delegate string OnRequestHandler(string message);

  public delegate byte[] OnRequestRawHandler(byte[] message);

  public class TinyHttpd
  {
    private delegate void OnClientRequestRawHandler(byte[] message);

    public event OnRequestHandler OnRequest;

    public event OnRequestRawHandler OnRequestRaw;

    public const ushort DefaultPort = 8888;

    public const ushort DefaultMinPort = 1024;

    public const ushort DefaultMaxPort = ushort.MaxValue;

    public Encoding Encoding = Encoding.UTF8;

    public readonly ushort Port;

    private TcpListener server;

    private ManualResetEvent waitForStop;

    #region ctors
    public TinyHttpd()
      : this(IPAddress.Any, DefaultPort)
    {
    }

    public TinyHttpd(ushort port)
      : this(IPAddress.Loopback, port)
    {
    }

    public TinyHttpd(IPAddress bindAddress, ushort port)
      : this(new IPEndPoint(bindAddress, port))
    {
    }

    public TinyHttpd(IPEndPoint endpoint)
    {
      this.Port = (ushort)endpoint.Port;
      this.server = new TcpListener(endpoint);
      this.waitForStop = new ManualResetEvent(false);
    }
    #endregion

    public TinyHttpd Start()
    {
      this.server.Start();

      this.server.BeginAcceptTcpClient(ar =>
      {
        var client = ((TcpListener)ar.AsyncState).EndAcceptTcpClient(ar);
        var request = client.GetStream();

        var bClient = new BufferedClient(request, client.ReceiveBufferSize);
        bClient.OnRequest += message =>
        {
          if (this.OnRequest is MulticastDelegate)
          {
            var response = this.OnRequest(this.Encoding.GetString(message));
            var byteResponse = this.Encoding.GetBytes(response);
            bClient.Stream.Write(byteResponse, 0, byteResponse.Length);
          }

          if (this.OnRequestRaw is MulticastDelegate)
          {
            var responseHeadersAndMessage = this.OnRequestRaw(message);
            bClient.Stream.Write(responseHeadersAndMessage, 0, responseHeadersAndMessage.Length);
          }
        };
        bClient.StartRead();

        this.Start();
      }, this.server);

      return this;
    }

    public void StartAndWaitForStop()
    {
      this.waitForStop.Reset();
      this.Start();
      this.waitForStop.WaitOne();
    }

    public TinyHttpd Stop()
    {
      this.server.Stop();
      this.waitForStop.Set();

      return this;
    }

    #region http request helpers
    public static string GetResource(string rawHttpRequest)
    {
      var firstLine = Regex.Split(rawHttpRequest, HttpNewLine).FirstOrDefault();

      if (firstLine == default(string))
      {
        return string.Empty;
      }

      var split = firstLine.Split(' ');

      return split.Length < 2 ? String.Empty : split.Skip(1).Take(1).First();
    }

    public static IDictionary<String, String> GetHeaders(byte[] rawHttpRequest)
    {
      return GetHeaders(Encoding.ASCII.GetString(rawHttpRequest));
    }

    public static IDictionary<String, String> GetHeaders(string rawHttpRequest)
    {
      var dict = new Dictionary<String, string>();
      var headers = Regex.Split(rawHttpRequest, HttpNewLine).Where(header => !XString.IsNullOrEmptyOrWhitespace(header));

      foreach (var header in headers)
      {
        var split = header.Split(':').ToArray();
        if (split.Length > 0)
        {
          dict[split[0]] = split.Length > 1 ? split[1].Trim() : String.Empty;
        }
      }

      return dict;
    }

    public static IDictionary<String, String> GetParameters(string rawHttpRequest)
    {
      var parameters = new Dictionary<string, string>();
      var request = GetResource(rawHttpRequest);
      var idx = request.IndexOf('?');

      if (idx > -1)
      {
        request = request.Substring(idx + 1);
        foreach (var kv in request.Split('&'))
        {
          var pair = kv.Split('=');
          parameters[pair[0]] = pair[1];
        }
      }

      return parameters;
    }
    #endregion

    #region http response helpers
    private const string JSONPResponse = "{0}({1});";
    private const string HttpNewLine = "\r\n";
    private const string HttpHeaders =
      @"HTTP/1.1 200 OK" + HttpNewLine +
       "Access-Control-Allow-Origin: *" + HttpNewLine +
       "Content-Type: {0}" + HttpNewLine +
       "Content-Length: {1}" + HttpNewLine +
       "Expires: Thu, 01 Jan 1970 00:00:00 GMT" + HttpNewLine + HttpNewLine + "{2}";
    public const string HttpHeaders404 =
      @"HTTP/1.1 404 Not Found" + HttpNewLine +
       "Content-Length: 0" + HttpNewLine + HttpNewLine;
    public string ToHttpResponse(string payload, string contentType)
    {
      return String.Format(HttpHeaders,
        contentType, Encoding.GetByteCount(payload), payload);
    }

    public string ToJSONPResponse(string payload, string callback)
    {
      return this.ToHttpResponse(String.Format(JSONPResponse,
        callback, payload), ContentTypesString[ContentTypes.JavaScript]);
    }

    public enum ContentTypes
    {
      JSON,
      JavaScript
    }

    public static readonly IDictionary<ContentTypes, String> ContentTypesString =
      new Dictionary<ContentTypes, String>()
      {
        { ContentTypes.JSON, "application/json" },
        { ContentTypes.JavaScript, "text/javascript" }
      };
    #endregion

    private class BufferedClient : IDisposable
    {
      public event OnClientRequestRawHandler OnRequest;

      private byte[] buffer;
      private IList<byte[]> buffers;
      public readonly NetworkStream Stream;

      public BufferedClient(NetworkStream stream, int bufferSize)
      {
        this.buffer = new byte[bufferSize];
        this.buffers = new List<byte[]>();
        this.Stream = stream;
      }

      public BufferedClient StartRead()
      {
        try
        {
          this.Stream.BeginRead(this.buffer, 0, this.buffer.Length, ar =>
          {
            try
            {
              var length = ((NetworkStream)ar.AsyncState).EndRead(ar);
              var done = this.buffer.Length > length;
              this.buffers.Add(this.buffer.Take(length).ToArray());

              if (done)
              {
                if (this.OnRequest is MulticastDelegate)
                {
                  using (this)
                  {
                    this.OnRequest(this.buffers.SelectMany(bArr => bArr).ToArray());
                  }
                }
              }
              else
              {
                this.StartRead();
              }
            }
            catch (IOException) { } // appears when the client forcibly closes the connection
          }, this.Stream);
        }
        catch (IOException) { } // appears when the client forcibly closes the connection

        return this;
      }

      #region dispose
      private bool disposed = false;
      protected void Dispose(bool disposing)
      {
        if (disposing && !disposed)
        {
          try
          {
            this.Stream.Dispose();
            this.buffers = null;
            this.buffer = null;
            this.OnRequest = null;
          }
          catch { }

          disposed = true;
        }
      }

      public void Dispose()
      {
        this.Dispose(true);
      }
      #endregion
    }
  }
}
