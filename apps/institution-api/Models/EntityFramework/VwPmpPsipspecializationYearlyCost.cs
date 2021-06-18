using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class VwPmpPsipspecializationYearlyCost
    {
        public int SpecializationId { get; set; }
        public int SessionOfStudyId { get; set; }
        public DateTime? SessionStartDate { get; set; }
        public DateTime? SessionEndDate { get; set; }
        public decimal? Cost { get; set; }
    }
}
