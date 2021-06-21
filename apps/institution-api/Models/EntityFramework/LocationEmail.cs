using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class LocationEmail
    {
        public int LocationEmailId { get; set; }
        public Guid LocationEmailGuid { get; set; }
        public string EmailUsage { get; set; }
        public string EmailType { get; set; }
        public int? ListSequence { get; set; }
        public string EmailAddress { get; set; }
        public int? LocationId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
