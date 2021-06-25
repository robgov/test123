using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class VwAbpostalCode
    {
        public string PostalCode { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }
    }
}
