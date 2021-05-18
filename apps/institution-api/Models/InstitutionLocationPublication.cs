using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class InstitutionLocationPublication
    {
        public int InstitutionLocationPublicationId { get; set; }
        public int? InstitutionLocationId { get; set; }
        public Guid LocationPublicationGuid { get; set; }
        public bool? IsPublishedOnWebsite { get; set; }
        public string LocationPublicationStatus { get; set; }
        public string SubRegion { get; set; }
        public string PublicationDetailStatus { get; set; }
        public DateTime? PublicationBusinessStartDate { get; set; }
        public DateTime? PublicationBusinessEndDate { get; set; }

        public virtual InstitutionLocation InstitutionLocation { get; set; }
    }
}
