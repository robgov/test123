using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProgramCost1
    {
        public Guid? ProgramCostGuid { get; set; }
        public string CostType { get; set; }
        public string CostDescription { get; set; }
        public decimal? Amount { get; set; }
        public Guid? ProgramGuid { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
