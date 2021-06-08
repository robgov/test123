using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwProgramType
    {
        public int ProgramTypeId { get; set; }
        public string ProgramType { get; set; }
        public int? ListSequence { get; set; }
    }
}
