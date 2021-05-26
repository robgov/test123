using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwCurrentInstitutionWebsite
    {
        public int InstitutionWebsiteId { get; set; }
        public int InstitutionId { get; set; }
        public string InstitutionType { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionCode { get; set; }
        public string WebsiteUsage { get; set; }
        public int? ListSequence { get; set; }
        public string WebsiteUrl { get; set; }
        public Guid? WebsiteGuid { get; set; }
    }
}
