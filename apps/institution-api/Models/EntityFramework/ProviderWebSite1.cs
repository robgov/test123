using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProviderWebSite1
    {
        public Guid? ProviderWebsiteGuid { get; set; }
        public string WebsiteUsage { get; set; }
        public int? ListSequence { get; set; }
        public string WebsiteUrl { get; set; }
        public Guid? ProviderGuid { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
