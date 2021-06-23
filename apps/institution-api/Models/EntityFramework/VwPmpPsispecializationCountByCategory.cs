using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class VwPmpPsispecializationCountByCategory
    {
        public string CipSubSeriesCode { get; set; }
        public string CipSubSeries { get; set; }
        public int? ProgramCount { get; set; }
        public int? SpecailizationCount { get; set; }
        public int? SessionCount { get; set; }
        public int? ProviderCount { get; set; }
    }
}
