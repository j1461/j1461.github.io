using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hkwk_ldn_dotnet
{
  public static class XIEnumerableT
  {
    public static IEnumerable<T> TopResultsMutlipleLists<T>(this IEnumerable<IEnumerable<T>> lists)
    {
      var listOfLists = new List<List<T>>();

      foreach (var list in lists)
      {
        listOfLists.Add(list.ToList());
      }

      var maxOuterIterations = listOfLists.Select(l => l.Count).Max();

      for (var i = 0; i < maxOuterIterations; i++)
      {
        listOfLists.RemoveAll(list => list.Count < i + 1);

        // randomize the current row
        var tempRandList = listOfLists.Select(l => l[i]).Randomize();
        foreach (var item in tempRandList)
        {
          yield return item;
        }
      }
    }
    public static IEnumerable<T> Randomize<T>(this IEnumerable<T> ie)
    {
      return ie.OrderBy(foo => XRNGCrypto.GeneralPurposeCSP.GetNextInt32());
    }
  }
}
