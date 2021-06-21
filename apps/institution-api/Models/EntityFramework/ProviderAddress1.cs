using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProviderAddress1
    {
        public Guid? ProviderAddressGuid { get; set; }
        public string AddressUsage { get; set; }
        public string AddressType { get; set; }
        public int? ListSequence { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string AddressLine4 { get; set; }
        public string City { get; set; }
        public string ProvinceState { get; set; }
        public string PostalZipCode { get; set; }
        public string Country { get; set; }
        public bool? VerifiedFlag { get; set; }
        public Guid? ProviderGuid { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
