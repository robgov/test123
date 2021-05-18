using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwCurrentInstitutionLocationEmail
    {
        public int? InstitutionLocationEmailId { get; set; }
        public int InstitutionId { get; set; }
        public int InstitutionLocationId { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionCode { get; set; }
        public string InstitutionStatus { get; set; }
        public string LocationName { get; set; }
        public int? LocationNumber { get; set; }
        public string LocationStatus { get; set; }
        public bool? IsOffSite { get; set; }
        public string EmailUsage { get; set; }
        public string EmailType { get; set; }
        public int? ListSequence { get; set; }
        public string EmailAddress { get; set; }
        public Guid? EmailGuid { get; set; }
    }
}
