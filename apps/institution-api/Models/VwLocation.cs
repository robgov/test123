using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwLocation
    {
        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public int? LocationNumber { get; set; }
        public string LocationStatus { get; set; }
        public bool? OffSiteFlag { get; set; }
        public string LocationPspstatus { get; set; }
        public int? ProviderId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
    }
}
