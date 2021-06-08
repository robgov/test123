using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwPmpPsiprogramByCategoryList
    {
        public string CipSubSeriesCode { get; set; }
        public string CipSubSeries { get; set; }
        public string ProviderName { get; set; }
        public string LogoUrl { get; set; }
        public string ProgramName { get; set; }

        public int ProgramId { get; set; }
  }
}
