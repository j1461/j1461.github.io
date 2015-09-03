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
  public class User
  {
    public const string
      SaveTo = "stackExchangeUsers.xml",
      SitesUrl = "https://api.stackexchange.com/2.2/users?fromdate={0}&order=desc&sort=reputation&site={1}";

    public static IDictionary<Site.SitesOfInterest, IList<User>> BestUsers(IEnumerable<Site> sites)
    {
      var fi = new FileInfo(SaveTo);
      throw new NotImplementedException();

      var tasks = sites.Select(site =>
        {
          return new Task<Tuple<Site, IList<User>>>(() =>
          {
            return Tuple.Create(site, TopUsersForSite(site));
          });
        }).ToArray();

      Task.WaitAll(tasks);

      return tasks.ToDictionary(task => task.Result.Item1.StackExSite, task => task.Result.Item2);
    }

    public static IList<User> TopUsersForSite(Site site)
    {
      throw new NotImplementedException();
    }
  }
}
