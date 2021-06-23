using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class VwSpecializationCost
    {
        public int SpecializationId { get; set; }
        public int? ProgramId { get; set; }
        public int? ProviderId { get; set; }
        public int SessionOfStudyId { get; set; }
        public string FundingYearCode { get; set; }
        public DateTime? SessionStartDate { get; set; }
        public DateTime? SessionEndDate { get; set; }
        public string CostType { get; set; }
        public decimal? Amount { get; set; }
        public decimal? StudyYear { get; set; }
        public bool? DisplayOnSfsflag { get; set; }
    }
}
