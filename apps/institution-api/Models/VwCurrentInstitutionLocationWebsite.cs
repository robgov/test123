using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwCurrentInstitutionLocationWebsite
    {
        public int? InstitutionLocationWebsiteId { get; set; }
        public int InstitutionId { get; set; }
        public int InstitutionLocationId { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionCode { get; set; }
        public string InstitutionStatus { get; set; }
        public string LocationName { get; set; }
        public int? LocationNumber { get; set; }
        public string LocationStatus { get; set; }
        public string WebsiteUsage { get; set; }
        public int? ListSequence { get; set; }
        public string WebsiteUrl { get; set; }
        public Guid? WebsiteGuid { get; set; }
    }
}
