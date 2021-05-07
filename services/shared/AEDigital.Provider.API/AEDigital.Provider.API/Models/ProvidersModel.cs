using System;

namespace AEDigital.Provider.API.Models
{
    public class ProvidersModel
    {

        // public int ProviderRowID { get; set; }
        public string ProviderID { get; set; }
        public string ProviderName { get; set; }
        public string ProviderDescription { get; set; }
        public string FederalInstitutionNumber { get; set; }
        public string GovernanceName { get; set; }
        public string LegalName { get; set; }
        public string PartyName { get; set; }
        public string OperatingName { get; set; }
        public string JurisdictionType { get; set; }
        public string OperatingType { get; set; }
        public string ProviderType { get; set; }
        public string ProviderCategory { get; set; }
        public string ProviderStatus { get; set; }
        public int ProviderNumber { get; set; }
        public string City { get; set; }
        public string ProvinceCode { get; set; }
        public string CountryCode { get; set; }
        public string CountryName { get; set; }
        public string PostalCode { get; set; }
        public string CreateDt { get; set; }
        public string CreateUsr { get; set; }
        public string DriverDt { get; set; }


    }
}
