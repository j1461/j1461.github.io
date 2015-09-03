using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet.Client
{
  /// <summary>
  /// This interface is used to equate implementing classes
  /// </summary>
  public class User : IUser
  {
    public int ID { get; set; }

    public string OnSiteUserName { get; set; }

    public string LoginName { get; set; }

    public string AvatarUrl { get; set; }

    public string Location { get; set; }

    public string Type { get; set; }

    public string Title { get; set; }

    public string FullName { get; set; }

    public override bool Equals(object obj)
    {
      var usr = obj as User;
      return usr != null && usr.ID == this.ID;
    }

    public override int GetHashCode()
    {
      return this.ID ^ this.LoginName.GetHashCode() ^ this.Type.GetHashCode() * 31;
    }
  }
}
