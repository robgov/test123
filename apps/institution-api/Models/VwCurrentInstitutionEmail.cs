using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwCurrentInstitutionEmail
    {
        public int InstitutionEmailId { get; set; }
        public int InstitutionId { get; set; }
        public string InstitutionType { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionCode { get; set; }
        public string EmailUsage { get; set; }
        public string EmailType { get; set; }
        public int? ListSequence { get; set; }
        public string EmailAddress { get; set; }
        public Guid? EmailGuid { get; set; }
    }
}
