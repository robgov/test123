using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProgramType
    {
        public int ProgramTypeId { get; set; }
        public Guid? ProgramTypeGuid { get; set; }
        public string ProgramType1 { get; set; }
        public int? ListSequence { get; set; }
        public DateTime LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
