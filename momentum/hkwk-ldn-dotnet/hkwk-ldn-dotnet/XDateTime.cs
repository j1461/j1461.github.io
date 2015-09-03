using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet
{
  public static class XDateTime
  {
    private static readonly DateTime UnixEpoch = new DateTime(1970, 1, 1);
    public static int Timestamp(this DateTime dt)
    {
      TimeSpan t = dt - UnixEpoch;
      return (int)t.TotalSeconds;
    }

    public static DateTime FromTimestamp(int timeStamp)
    {
      return UnixEpoch.AddSeconds(timeStamp);
    }

    public static TimeSpan Difference(this DateTime now, int then)
    {
      return (now - UnixEpoch.AddSeconds(then)).Duration();
    }
  }
}
