using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class CipCode1
    {
        public string CipCode { get; set; }
        public string CipDescription { get; set; }
        public string CipDefinition { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
