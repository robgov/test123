using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class SessionOfStudyCost1
    {
        public Guid? SessionOfStudyCostGuid { get; set; }
        public string CostType { get; set; }
        public Guid? CostTypeGuid { get; set; }
        public decimal? Amount { get; set; }
        public Guid? SessionOfStudyGuid { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
