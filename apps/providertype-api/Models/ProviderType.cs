using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderTypeApi.Models
{
    public partial class ProviderType
    {
        public int ProviderTypeId { get; set; }
        public string ProviderType1 { get; set; }
        public Guid? ProviderTypeGuid { get; set; }
        public int? ListSequene { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
