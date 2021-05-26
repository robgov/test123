using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class InstitutionWebsite
    {
        public int InstitutionWebsiteId { get; set; }
        public int InstitutionId { get; set; }
        public Guid? WebsiteGuid { get; set; }
        public string WebsiteUsage { get; set; }
        public int? ListSequence { get; set; }
        public string WebsiteUrl { get; set; }
        public DateTime? WebsiteBusinessStartDate { get; set; }
        public DateTime? WebsiteBusinessEndDate { get; set; }

        public virtual Institution Institution { get; set; }
    }
}
