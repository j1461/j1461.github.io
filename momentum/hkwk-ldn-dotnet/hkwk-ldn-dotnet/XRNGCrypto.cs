using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet
{
  public static class XRNGCrypto
  {
    private static Lazy<RNGCryptoServiceProvider> generalPurposeCSP = new Lazy<RNGCryptoServiceProvider>(() =>
    {
      return new RNGCryptoServiceProvider();
    });
    public static RNGCryptoServiceProvider GeneralPurposeCSP
    {
      get { return generalPurposeCSP.Value; }
    }

    /// <summary>
    /// Gets a random value between [0 .. 1]
    /// </summary>
    public static Double RandomProbabilityBetweenZeroAndOne
    {
      get
      {
        return (double)((double)GeneralPurposeCSP.GetNextUInt32() / (double)UInt32.MaxValue);
      }
    }

    public static int GetNextInt32(this RNGCryptoServiceProvider rnd)
    {
      byte[] randomInt = new byte[4];
      rnd.GetBytes(randomInt);
      return BitConverter.ToInt32(randomInt, 0);
    }

    public static uint GetNextUInt32(this RNGCryptoServiceProvider rnd)
    {
      byte[] randomUint = new byte[4];
      rnd.GetBytes(randomUint);
      return BitConverter.ToUInt32(randomUint, 0);
    }
  }
}
