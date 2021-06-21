using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class LocationPublication
    {
        public int LocationPublicationId { get; set; }
        public Guid LocationPublicationGuid { get; set; }
        public string LocationPublicationStatus { get; set; }
        public bool? PublishOnWebsiteFlag { get; set; }
        public string SubRegion { get; set; }
        public string PublicationDetailStatus { get; set; }
        public int? LocationId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
