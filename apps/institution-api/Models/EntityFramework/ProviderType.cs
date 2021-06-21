using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProviderType
    {
        public int ProviderTypeId { get; set; }
        public string ProviderType1 { get; set; }
        public Guid? ProviderTypeGuid { get; set; }
        public int? ListSequence { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
