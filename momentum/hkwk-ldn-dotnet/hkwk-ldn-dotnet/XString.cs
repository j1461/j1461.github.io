using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet
{
  public static class XString
  {
    public static bool IsNullOrEmptyOrWhitespace(this string @string)
    {
      return string.IsNullOrEmpty(@string) || string.IsNullOrWhiteSpace(@string);
    }

    public static string MD5(this string input)
    {
      // step 1, calculate MD5 hash from input
      var md5 = System.Security.Cryptography.MD5.Create();
      byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
      byte[] hash = md5.ComputeHash(inputBytes);

      // step 2, convert byte array to hex string
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < hash.Length; i++)
      {
        sb.Append(hash[i].ToString("X2"));
      }
      return sb.ToString().ToLower();
    }
  }
}
