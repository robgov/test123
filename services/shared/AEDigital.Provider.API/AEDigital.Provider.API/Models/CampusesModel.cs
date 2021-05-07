using System;

namespace AEDigital.Provider.API.Models
{
    public class CampusesModel
    {

        public int CampusRowID { get; set; }
        public string LocationID { get; set; }
        public string ProviderID { get; set; }
        public int LocationNumber { get; set; }
        public string LocationName { get; set; }
        public string ContactUsage { get; set; }
        public string AddressType { get; set; }
        public string Line1 { get; set; }
        public string Line2 { get; set; }
        public string Line3 { get; set; }
        public string Line4 { get; set; }
        public string City { get; set; }
        public string ProvinceCode { get; set; }
        public string CountryCode { get; set; }
        public string CountryName { get; set; }
        public string PostalCode { get; set; }
        public int Verified { get; set; }
        public string CreateDt { get; set; }
        public string CreateUsr { get; set; }
        public string DriverDt { get; set; }

    }
}
