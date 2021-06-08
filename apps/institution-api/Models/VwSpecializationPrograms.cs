using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwSpecializationPrograms
    {
        public string CipSubSeriesCode { get; set; }
        public List<VwProgram> Programs { get; set; }
    }
}
