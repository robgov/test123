using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class LocationPublication1
    {
        public Guid? LocationPublicationGuid { get; set; }
        public string LocationPublicationStatus { get; set; }
        public bool? PublishOnWebsiteFlag { get; set; }
        public string SubRegion { get; set; }
        public string PublicationDetailStatus { get; set; }
        public Guid? LocationGuid { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
