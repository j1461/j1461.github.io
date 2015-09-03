using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet.Client
{
  public class ListMerger
  {
    public IReadOnlyList<string> Keywords { get; private set; }

    public ListMerger(string[] keywords)
    {
      this.Keywords = keywords.Select(k => k.Trim()).ToList().AsReadOnly();
      this.allFetchedAndMerged = new Lazy<IList<CompoundUser>>(() =>
      {
        var listOfLists = new List<IList<User>>();

        foreach (var keyword in this.Keywords)
        {
          var task1 = Task.Factory.StartNew<IList<User>>(() =>
          {
            try
            {
              var ltu = new Client.GitHub.ListTopUsers();
              return ltu.TopUsers(keyword);
            }
            catch { }
            return new List<User>();
          });

          var task2 = Task.Factory.StartNew<IList<User>>(() =>
          {
            try
            {
              var ltu = new Client.Behance.ListTopUsers();
              return ltu.TopUsers(keyword);
            }
            catch { }
            return new List<User>();
          });

          Task.WaitAll(task1, task2);
          listOfLists.Add(task1.Result);
          listOfLists.Add(task2.Result);
        }

        var allRawUsersSorted = listOfLists.TopResultsMutlipleLists();
        // now make sure we have a unique list:
        var allUsersUniqueRaw = new List<User>(new HashSet<User>(allRawUsersSorted));

        // now, for each user, try to build a compound-user
        var compoundUsersUnique = new HashSet<CompoundUser>();
        foreach (var rawUserOuter in allUsersUniqueRaw)
        {
          foreach (var rawUserInner in allUsersUniqueRaw)
          {
            var githubUser = rawUserOuter.Type == "Hacker" ? rawUserOuter : rawUserInner;
            var behanceUser = rawUserOuter.Type == "Hacker" ? rawUserInner : rawUserOuter;

            if (!rawUserOuter.Equals(rawUserInner) && rawUserOuter.Type != rawUserInner.Type)
            {
              // only compare unequal profiles of different types..
              if (rawUserOuter.AvatarUrl == rawUserInner.AvatarUrl
                || rawUserOuter.FullName == rawUserInner.FullName
                || rawUserOuter.LoginName == rawUserInner.LoginName
                || rawUserOuter.Title == rawUserInner.Title)
              {
                compoundUsersUnique.Add(new CompoundUser
                {
                  GitHub_Id = githubUser.ID,
                  Behance_Id = behanceUser.ID,
                  AvatarUrl = githubUser.AvatarUrl,
                  Title = behanceUser.Title,
                  FullName = behanceUser.FullName,
                  Type = githubUser.Type + "," + behanceUser.Type,
                  Location = behanceUser.Location,
                  OnSiteUserName = githubUser.OnSiteUserName
                });
              }
              else
              {
                if (rawUserOuter.Type == "Hacker")
                {
                  compoundUsersUnique.Add(new CompoundUser
                  {
                    AvatarUrl = rawUserOuter.AvatarUrl,
                    GitHub_Id = rawUserOuter.ID,
                    FullName = rawUserOuter.LoginName,
                    Type = rawUserOuter.Type,
                    OnSiteUserName = rawUserOuter.OnSiteUserName
                  });
                }
                else
                {
                  compoundUsersUnique.Add(new CompoundUser
                  {
                    AvatarUrl = rawUserOuter.AvatarUrl,
                    Behance_Id = rawUserOuter.ID,
                    FullName = rawUserOuter.FullName,
                    Location = rawUserOuter.Location,
                    Title = rawUserOuter.Title,
                    Type = rawUserOuter.Type,
                    OnSiteUserName = rawUserOuter.OnSiteUserName
                  });
                }
              }
            }
          }
        }

        var wholeList = new List<CompoundUser>(compoundUsersUnique);
        return wholeList.Where(cu => cu.GitHub_Id.HasValue && cu.Behance_Id.HasValue)
          .Concat(wholeList.Where(cu => !cu.GitHub_Id.HasValue || !cu.Behance_Id.HasValue)).ToList();
      }, LazyThreadSafetyMode.ExecutionAndPublication);
    }

    /// <summary>
    /// For each keyword, we query each provider. So, for each keyword and for each provider,
    /// we get back a list.
    /// The next step would be mer
    /// </summary>    
    private Lazy<IList<CompoundUser>> allFetchedAndMerged;
    public IList<CompoundUser> AllFetchedAndMerged
    {
      get
      {
        return allFetchedAndMerged.Value;
      }
    }
  }
}
