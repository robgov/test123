using LinqKit;
using ProviderApi.Models.EntityFramework;
using ProviderApi.Models.ModelParameters;

namespace ProviderApi.Controllers.Enrichers
{
  public static class LocationAddressEnricher
  {
    public static ExpressionStarter<VwLocationAddress> LocationAddressFilter(PagedDataParameters pagedDataParameters, ExpressionStarter<VwLocationAddress> predicate)
    {
      return predicate;
    }
  }
}
