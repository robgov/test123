using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwCurrentInstitutionLocationPublication
    {
        public int? InstitutionLocationPublicationId { get; set; }
        public int InstitutionId { get; set; }
        public int InstitutionLocationId { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionCode { get; set; }
        public string InstitutionStatus { get; set; }
        public string LocationName { get; set; }
        public int? LocationNumber { get; set; }
        public string LocationStatus { get; set; }
        public bool? PublishOnWebFlag { get; set; }
        public string LocationPublicationStatus { get; set; }
        public string SubRegion { get; set; }
        public string PublicationDetailStatus { get; set; }
        public Guid? LocationPublicationGuid { get; set; }
    }
}
