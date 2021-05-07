using AEDigital.Provider.API.Models;
using LinqKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AEDigital.Provider.API.Controllers.Enrichers
{
    public class ProvidersEnricher
    {
        public static ExpressionStarter<ProvidersModel> ProviderFilter(ProvidersParameters providerParameters, ExpressionStarter<ProvidersModel> predicate)
        {

            if (!string.IsNullOrEmpty(providerParameters.JurisdictionType))
                predicate = predicate.And(provider => provider.JurisdictionType.Contains(providerParameters.JurisdictionType));

            if (!string.IsNullOrEmpty(providerParameters.OperatingType))
                predicate = predicate.And(provider => provider.OperatingType.Contains(providerParameters.OperatingType));

            if (!string.IsNullOrEmpty(providerParameters.ProviderType))
                predicate = predicate.And(provider => provider.ProviderType.Contains(providerParameters.ProviderType));

            if (!string.IsNullOrEmpty(providerParameters.ProviderCategory))
                predicate = predicate.And(provider => provider.ProviderCategory.Contains(providerParameters.ProviderCategory));

            if (!string.IsNullOrEmpty(providerParameters.City))
                predicate = predicate.And(provider => provider.City.Contains(providerParameters.City));

            if (!string.IsNullOrEmpty(providerParameters.ProvinceCode))
                predicate = predicate.And(provider => provider.ProvinceCode.Contains(providerParameters.ProvinceCode));

            if (!string.IsNullOrEmpty(providerParameters.CountryCode))
                predicate = predicate.And(provider => provider.CountryCode.Contains(providerParameters.CountryCode));

            if (!string.IsNullOrEmpty(providerParameters.CountryCode))
                predicate = predicate.And(provider => provider.CountryCode.Contains(providerParameters.CountryCode));

            if (!string.IsNullOrEmpty(providerParameters.CountryName))
                predicate = predicate.And(provider => provider.CountryName.Contains(providerParameters.CountryName));

            if (!string.IsNullOrEmpty(providerParameters.PostalCode))
                predicate = predicate.And(provider => provider.PostalCode.Contains(providerParameters.PostalCode));

            return predicate;
        }

    }
}
