using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class PmpLookup
    {
        public string Code { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public int DisplayOrder { get; set; }
    }
}
