using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class InstitutionAddress
    {
        public int InstitutionAddressId { get; set; }
        public int InstitutionId { get; set; }
        public Guid? AddressGuid { get; set; }
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
        public DateTime? AddressBusinessStartDate { get; set; }
        public DateTime? AddressBusinessEndDate { get; set; }

        public virtual Institution Institution { get; set; }
    }
}
