using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwProviderEmail
    {
        public int ProviderEmailId { get; set; }
        public string EmailUsage { get; set; }
        public string EmailType { get; set; }
        public int? ListSequence { get; set; }
        public string EmailAddress { get; set; }
        public int? ProviderId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
    }
}
