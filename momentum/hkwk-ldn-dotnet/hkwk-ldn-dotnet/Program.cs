using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet
{
  class Program
  {
    static void Main(string[] args)
    {
      /*var keywords = "photoshop,.net,asp,after effects".Split(',');


      var foo = new Client.ListMerger(keywords).AllFetchedAndMerged;
      //var foo = Client.StackExch.Site.AllSites;
      //new Client.GitHub.ListTopUsers().TopUsers("raspberry");
      new Client.Behance.ListTopUsers().TopUsers("photoshop");*/

      var tHttpd = new TinyHttpd(IPAddress.Any, 8888);

      tHttpd.OnRequest += message =>
      {
        var headers = TinyHttpd.GetHeaders(message);
        var resource = TinyHttpd.GetResource(message);

        if (resource.StartsWith("/list/"))
        {
          var keywords = resource.Substring(6).Split(',');
          var lm = new Client.ListMerger(keywords);

          var json = JsonConvert.SerializeObject(lm.AllFetchedAndMerged);
          return tHttpd.ToHttpResponse("{\"Hackers\":" + json + "}", "application/javascript");
        }

        return TinyHttpd.HttpHeaders404;
      };

      tHttpd.StartAndWaitForStop();
    }
  }
}
