using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class VwLocationWebsite
    {
        public int LocationWebsiteId { get; set; }
        public string WebsiteUsage { get; set; }
        public int? ListSequence { get; set; }
        public string WebsiteUrl { get; set; }
        public int? LocationId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
    }
}
