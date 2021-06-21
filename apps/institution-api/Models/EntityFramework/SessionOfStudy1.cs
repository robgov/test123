using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class SessionOfStudy1
    {
        public Guid? SessionOfStudyGuid { get; set; }
        public string FundingYearCode { get; set; }
        public string FundingYear { get; set; }
        public bool? DisplayOnSfsflag { get; set; }
        public decimal? StudyYear { get; set; }
        public DateTime? SessionStartDate { get; set; }
        public DateTime? SessionEndDate { get; set; }
        public Guid? SpecializationGuid { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
