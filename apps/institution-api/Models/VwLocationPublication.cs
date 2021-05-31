using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwLocationPublication
    {
        public int LocationPublicationId { get; set; }
        public string LocationPublicationStatus { get; set; }
        public bool? PublishOnWebsiteFlag { get; set; }
        public string SubRegion { get; set; }
        public string PublicationDetailStatus { get; set; }
        public int? LocationId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
    }
}
