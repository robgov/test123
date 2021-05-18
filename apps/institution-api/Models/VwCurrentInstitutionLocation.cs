using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwCurrentInstitutionLocation
    {
        public int InstitutionId { get; set; }
        public int InstitutionLocationId { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionCode { get; set; }
        public string LocationName { get; set; }
        public int? LocationNumber { get; set; }
        public string LocationStatus { get; set; }
        public bool? IsOffSite { get; set; }
        public Guid? LocationGuid { get; set; }
    }
}
