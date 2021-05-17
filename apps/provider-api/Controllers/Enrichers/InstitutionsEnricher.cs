using LinqKit;
using ProviderApi.Models;
using ProviderApi.Models.ModelParameters;

namespace ProviderApi.Controllers.Enrichers
{
  public static class InstitutionsEnricher
  {
    public static ExpressionStarter<VwInstitutionSummary> InstitutionFilter(InstitutionsParameters institutionsParameters, ExpressionStarter<VwInstitutionSummary> predicate)
    {
      if (!string.IsNullOrEmpty(institutionsParameters.InstitutionName))
        predicate = predicate.And(provider => provider.InstitutionName.Contains(institutionsParameters.InstitutionName));

      return predicate;
    }
  }
}
