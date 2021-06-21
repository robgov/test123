using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class SessionOfStudyCost
    {
        public int SessionOfStudyCostId { get; set; }
        public Guid? SessionOfStudyCostGuid { get; set; }
        public string CostType { get; set; }
        public decimal? Amount { get; set; }
        public int? SessionOfStudyId { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
