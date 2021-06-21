using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProviderEmail1
    {
        public Guid? ProviderEmailGuid { get; set; }
        public string EmailUsage { get; set; }
        public string EmailType { get; set; }
        public int? ListSequence { get; set; }
        public string EmailAddress { get; set; }
        public Guid? ProviderGuid { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
