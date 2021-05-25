using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class InstitutionEmail
    {
        public int InstitutionEmailId { get; set; }
        public int InstitutionId { get; set; }
        public Guid? EmailGuid { get; set; }
        public string EmailUsage { get; set; }
        public string EmailType { get; set; }
        public int? ListSequence { get; set; }
        public string EmailAddress { get; set; }
        public DateTime? EmailBusinessStartDate { get; set; }
        public DateTime? EmailBusinessEndDate { get; set; }

        public virtual Institution Institution { get; set; }
    }
}
