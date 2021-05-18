using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class InstitutionLocation
    {
        public InstitutionLocation()
        {
            InstitutionLocationAddresses = new HashSet<InstitutionLocationAddress>();
            InstitutionLocationEmails = new HashSet<InstitutionLocationEmail>();
            InstitutionLocationPhones = new HashSet<InstitutionLocationPhone>();
            InstitutionLocationPublications = new HashSet<InstitutionLocationPublication>();
            InstitutionLocationWebsites = new HashSet<InstitutionLocationWebsite>();
        }

        public int InstitutionLocationId { get; set; }
        public int InstitutionId { get; set; }
        public string LocationName { get; set; }
        public int? LocationNumber { get; set; }
        public bool? IsOffSite { get; set; }
        public string LocationStatus { get; set; }
        public Guid? ProviderGuid { get; set; }
        public Guid? LocationGuid { get; set; }
        public DateTime? ProviderBusinessStartDate { get; set; }
        public DateTime? ProviderBusinessEndDate { get; set; }
        public DateTime? LocationBusinessStartDate { get; set; }
        public DateTime? LocationBusinessEndDate { get; set; }

        public virtual Institution Institution { get; set; }
        public virtual ICollection<InstitutionLocationAddress> InstitutionLocationAddresses { get; set; }
        public virtual ICollection<InstitutionLocationEmail> InstitutionLocationEmails { get; set; }
        public virtual ICollection<InstitutionLocationPhone> InstitutionLocationPhones { get; set; }
        public virtual ICollection<InstitutionLocationPublication> InstitutionLocationPublications { get; set; }
        public virtual ICollection<InstitutionLocationWebsite> InstitutionLocationWebsites { get; set; }
    }
}
