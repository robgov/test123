using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
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
    }
}
