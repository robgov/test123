using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class VwProgramCost
    {
        public int? ProgramId { get; set; }
        public decimal? Tuition { get; set; }
        public decimal? Books { get; set; }
        public decimal? Other { get; set; }
    }
}
