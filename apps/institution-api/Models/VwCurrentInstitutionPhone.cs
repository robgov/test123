using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwCurrentInstitutionPhone
    {
        public int InstitutionPhoneId { get; set; }
        public int InstitutionId { get; set; }
        public string InstitutionType { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionCode { get; set; }
        public string PhoneUsage { get; set; }
        public string PhoneType { get; set; }
        public int? ListSequence { get; set; }
        public string CountryCallingCode { get; set; }
        public string PhoneNumber { get; set; }
        public string Extension { get; set; }
        public Guid? PhoneGuid { get; set; }
    }
}
