using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace hkwk_ldn_dotnet
{
  class StaticUtils
  {
    public static bool TryDataContractXmlSerialize<T>(T obj, string absFileName)
    {
      string result;
      if (TryDataContractXmlSerialize<T>(obj, out result))
      {
        try
        {
          File.WriteAllText(absFileName, result);
          return true;
        }
        catch { }
      }

      return false;
    }

    public static bool TryDataContractXmlSerialize<T>(T obj, out string result)
    {
      result = default(string);

      try
      {
        var serializer = new DataContractSerializer(typeof(T));
        using (var ms = new MemoryStream())
        {
          serializer.WriteObject(ms, obj);
          ms.Seek(0, SeekOrigin.Begin);

          using (var sr = new StreamReader(ms))
          {
            result = sr.ReadToEnd();
            return true;
          }
        }
      }
      catch { }

      return false;
    }

    public static bool TryDataContractXmlDeSerialize<T>(
      string absFileName, out T obj, bool tryInitializeNewIfFailure = false)
    {
      obj = default(T);

      try
      {
        var serializer = new DataContractSerializer(typeof(T));
        using (var fs = File.Open(absFileName, FileMode.Open, FileAccess.Read))
        {
          obj = (T)serializer.ReadObject(fs);
          return true;
        }
      }
      catch { }

      if (tryInitializeNewIfFailure)
      {
        try
        {
          obj = Activator.CreateInstance<T>();
          return true;
        }
        catch
        {
          return false;
        }
      }

      return false;
    }

    public static string DownloadString(String uri)
    {
      using (var wc = new CompressionWebClient())
      {
        var x = wc.DownloadString(uri);
        return x;
      }
    }
  }
}
