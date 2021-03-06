using LinqKit;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;

namespace ProviderApi.Controllers.Enrichers
{
  public static class ProviderEnricher
  {
    public static ExpressionStarter<VwProvider> ProviderFilter(PagedDataParameters pagedDataParameters, ExpressionStarter<VwProvider> predicate)
    {
      return predicate;
    }
  }
}
