using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProviderWebsite
    {
        public int ProviderWebsiteId { get; set; }
        public Guid ProviderWebsiteGuid { get; set; }
        public string WebsiteUsage { get; set; }
        public int? ListSequence { get; set; }
        public string WebsiteUrl { get; set; }
        public int? ProviderId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
