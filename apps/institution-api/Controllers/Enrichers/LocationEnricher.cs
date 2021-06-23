using LinqKit;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;

namespace ProviderApi.Controllers.Enrichers
{
  public static class LocationEnricher
  {
    public static ExpressionStarter<VwLocation> LocationFilter(PagedDataParameters pagedDataParameters, ExpressionStarter<VwLocation> predicate)
    {
      return predicate;
    }
  }
}
