using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet.Client
{
  public interface IUser
  {
    int ID { get; set; }

    string LoginName { get; set; }

    string AvatarUrl { get; set; }

    string Type { get; set; }
  }
}
