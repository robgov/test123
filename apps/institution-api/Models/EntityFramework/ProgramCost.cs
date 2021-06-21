using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProgramCost
    {
        public int ProgramCostId { get; set; }
        public Guid ProgramCostGuid { get; set; }
        public string CostType { get; set; }
        public string CostDescription { get; set; }
        public decimal? Amount { get; set; }
        public int? ProgramId { get; set; }
        public DateTime LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
