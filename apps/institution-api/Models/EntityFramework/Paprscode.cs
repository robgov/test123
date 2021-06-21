using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class Paprscode
    {
        public string TypeGovernor { get; set; }
        public string CodeType { get; set; }
        public string CodeDisplay { get; set; }
        public Guid? CodeTypeGuid { get; set; }
        public Guid? CodeDisplayGuid { get; set; }
        public int? ListSequence { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
