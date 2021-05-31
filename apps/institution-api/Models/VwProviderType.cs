using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwProviderType
    {
        public int ProviderTypeId { get; set; }
        public string ProviderType { get; set; }
        public int? ListSequence { get; set; }
    }
}
