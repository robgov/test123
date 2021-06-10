using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwPmpPsispecializationCountByCategory
    {
        public string CipSubSeriesCode { get; set; }
        public string CipSubSeries { get; set; }
        public int? ProgramCount { get; set; }
    }
}
