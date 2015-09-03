using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet.Client
{
  public class CompoundUser
  {
    public int? GitHub_Id { get; set; }

    public int? Behance_Id { get; set; }

    public string OnSiteUserName { get; set; }

    public string FullName { get; set; }

    public string Desc { get; set; }

    public string AvatarUrl { get; set; }

    public string Title { get; set; }

    /// <summary>
    /// Designer | Hacker
    /// </summary>
    public string Type { get; set; }

    /// <summary>
    /// City's name
    /// </summary>
    public string Location { get; set; }

    public override bool Equals(object obj)
    {
      var usr = obj as CompoundUser;
      return usr != null && usr.GitHub_Id == this.GitHub_Id
        && usr.Behance_Id == this.Behance_Id;
    }

    public override int GetHashCode()
    {
      return this.GitHub_Id.GetHashCode() ^ this.Behance_Id.GetHashCode() * 31;
    }
  }
}
