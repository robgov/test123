using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class SessionOfStudy
    {
        public int SessionOfStudyId { get; set; }
        public Guid? SessionOfStudyGuid { get; set; }
        public string FundingYearCode { get; set; }
        public string FundingYear { get; set; }
        public bool? DisplayOnSfsflag { get; set; }
        public decimal? StudyYear { get; set; }
        public DateTime? SessionStartDate { get; set; }
        public DateTime? SessionEndDate { get; set; }
        public int? SpecializationId { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
