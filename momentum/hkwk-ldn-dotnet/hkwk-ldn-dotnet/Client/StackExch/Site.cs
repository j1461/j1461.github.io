using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet.Client.StackExch
{
  [DataContract]
  public class Site
  {
    public enum SitesOfInterest
    {
      Stack_Overflow,
      Super_User,
      Programmers,
      Android_Enthusiasts,
      Information_Security,
      Programming_Puzzles_amp_Codegolf,
      Cryptography,
      Robotics,
      Space_Exploration,
      Data_Science,
      Electrical_Engineering,
      Theoretical_Computer_Science,
      Physics,
		  Computational_Science,
      Computer_Science
    }

    public static readonly IDictionary<SitesOfInterest, String> SitesEnumAndString =
      Enum.GetValues(typeof(SitesOfInterest)).Cast<SitesOfInterest>()
      .ToDictionary(s => s, s => s.ToString().ToLower().Replace('_', ' ').Replace("amp", "&amp"));

    public const string
      SaveTo = "stackExchangeSites.xml",
      SitesUrl = "https://api.stackexchange.com/2.2/sites?pagesize=250&filter=default";

    [DataMember]
    public string Name { get; set; }

    [DataMember]
    public string ApiSiteParameter { get; set; }

    [DataMember]
    public SitesOfInterest StackExSite { get; set; }

    public Site(String name, string apiSiteParameter)
    {
      this.Name = name;
      this.ApiSiteParameter = apiSiteParameter;
    }

    #region static
    public static IList<Site> AllSites
    {
      get
      {
        var fi = new FileInfo(SaveTo);
        List<Site> s;

#if DEBUG
        if (fi.Exists && fi.LastWriteTime < (DateTime.Now.Subtract(TimeSpan.FromHours(12)))
          && StaticUtils.TryDataContractXmlDeSerialize(fi.FullName, out s))
        {
          return s;
        }
#endif
        var sitesStringAndEnum = SitesEnumAndString.ToDictionary(
          kv => kv.Value, kv => kv.Key);
        var json = JObject.Parse(StaticUtils.DownloadString(SitesUrl));
        var items = (JArray)json["items"];

        var sitesRaw = items.Select(item =>
        {
          return new Site(
            (string)item["name"], (string)item["api_site_parameter"]);
        });

        s = sitesRaw.Where(site => SitesEnumAndString.Values.Contains(site.Name.ToLower())).ToList();
        s.ForEach(site => site.StackExSite = sitesStringAndEnum[site.Name.ToLower()]);
        StaticUtils.TryDataContractXmlSerialize(s, SaveTo);

        return s;
      }
    }
    #endregion
  }
}
