using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class InstitutionLocationWebsite
    {
        public int InstitutionLocationWebsiteId { get; set; }
        public int? InstitutionLocationId { get; set; }
        public Guid WebsiteGuid { get; set; }
        public string WebsiteUsage { get; set; }
        public int? ListSequence { get; set; }
        public string WebsiteUrl { get; set; }
        public DateTime? WebsiteBusinessStartDate { get; set; }
        public DateTime? WebsiteBusinessEndDate { get; set; }

        public virtual InstitutionLocation InstitutionLocation { get; set; }
    }
}
