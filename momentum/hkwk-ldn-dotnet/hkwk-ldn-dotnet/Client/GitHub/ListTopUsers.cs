using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace hkwk_ldn_dotnet.Client.GitHub
{
  public class ListTopUsers
  {
    private static readonly TimeSpan BufferTime = TimeSpan.FromMinutes(5);

    const string
      SaveTo = "githubUsersList_{0}.xml",
      EndPoint = "https://api.github.com/search/users?q={0}+type%3Auser&sort=followers&order=desc";

    public IList<User> TopUsers(string query)
    {
      query = query.ToLower().Trim();

      var l = new List<User>();
      var fi = new FileInfo(String.Format(SaveTo, query.MD5()));

      if (fi.Exists && fi.LastWriteTime < (DateTime.Now.Subtract(BufferTime))
          && StaticUtils.TryDataContractXmlDeSerialize(fi.FullName, out l))
      {
        return l;
      }

      var json = JObject.Parse(StaticUtils.DownloadString(
        String.Format(EndPoint, Uri.EscapeDataString(query))));
      var items = (JArray)json["items"];

      l = items.Select(item =>
      {
        return new User
        {
          ID = (int)item["id"],
          LoginName = (string)item["login"],
          AvatarUrl = (String)item["avatar_url"],
          Type = "Hacker",
          OnSiteUserName = (string)item["login"]
        };
      }).ToList();
      StaticUtils.TryDataContractXmlSerialize(l, fi.FullName);

      return l;
    }
  }
}
