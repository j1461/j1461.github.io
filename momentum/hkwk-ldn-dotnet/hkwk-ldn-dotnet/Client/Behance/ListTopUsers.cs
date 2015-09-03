using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet.Client.Behance
{
  public class ListTopUsers
  {
    private static readonly TimeSpan BufferTime = TimeSpan.FromMinutes(5);

    const string
      SaveTo = "behanceUsersList_{0}.xml",
      EndPoint = "http://www.behance.net/v2/users?client_id=0znpxGLez1XiVgIZngc9BG7UuWT1ys4I&q={0}&sort=appreciations";

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
      var items = (JArray)json["users"];

      l = items.Select(item =>
      {
        return new User
        {
          ID = (int)item["id"],
          LoginName = (string)item["username"],
          AvatarUrl = (string)((JObject)item["images"])["276"],
          Location = (string)item["location"],
          Title = (string)item["occupation"],
          Type = "Designer",
          FullName = (string)item["first_name"] + " " + (string)item["last_name"],
          OnSiteUserName = (string)item["username"]
        };
      }).ToList();
      StaticUtils.TryDataContractXmlSerialize(l, fi.FullName);

      return l;
    }
  }
}
