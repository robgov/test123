using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class InstitutionLocationPhone
    {
        public int InstitutionLocationPhoneId { get; set; }
        public int InstitutionLocationId { get; set; }
        public Guid PhoneGuid { get; set; }
        public string PhoneUsage { get; set; }
        public string PhoneType { get; set; }
        public int? ListSequence { get; set; }
        public string CountryCallingCode { get; set; }
        public string PhoneNumber { get; set; }
        public string Extension { get; set; }
        public DateTime? PhoneBusinessStartDate { get; set; }
        public DateTime? PhoneBusinessEndDate { get; set; }

        public virtual InstitutionLocation InstitutionLocation { get; set; }
    }
}
