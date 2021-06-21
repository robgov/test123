using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class SchemaSnapshot
    {
        public byte[] Snapshot { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
