using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class Location1
    {
        public Guid? LocationGuid { get; set; }
        public string LocationName { get; set; }
        public int? LocationNumber { get; set; }
        public string LocationStatus { get; set; }
        public bool? OffSiteFlag { get; set; }
        public string LocationPspstatus { get; set; }
        public Guid? ProviderGuid { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
