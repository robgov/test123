using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class VwPmpPsispecializationByCategoryList
    {
        public string CipSubSeriesCode { get; set; }
        public string CipSubSeries { get; set; }
        public string ProviderName { get; set; }
        public string LogoUrl { get; set; }
        public string ProgramName { get; set; }
        public string SpecializationName { get; set; }
        public int SpecializationId { get; set; }
        public int? ProgramNumber { get; set; }
        public int? SpecializationNumber { get; set; }
        public string ProgramCode { get; set; }
        public string SpecializationCode { get; set; }
        public DateTime? SessionStartDate { get; set; }
        public DateTime? SessionEndDate { get; set; }
    }
}
