using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class Institution
    {
        public Institution()
        {
            InstitutionAddresses = new HashSet<InstitutionAddress>();
            InstitutionEmails = new HashSet<InstitutionEmail>();
            InstitutionLocations = new HashSet<InstitutionLocation>();
            InstitutionPhones = new HashSet<InstitutionPhone>();
            InstitutionPublications = new HashSet<InstitutionPublication>();
            InstitutionWebsites = new HashSet<InstitutionWebsite>();
        }

        public int InstitutionId { get; set; }
        public string OperatingName { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionLegalName { get; set; }
        public string InstitutionShortName { get; set; }
        public string InstitutionType { get; set; }
        public string OperatingType { get; set; }
        public string HomeJurisdiction { get; set; }
        public string InstituitionCategory { get; set; }
        public string InstitutionCode { get; set; }
        public int PaprsinstitutionNumber { get; set; }
        public int? ProvincialInstitutionNumber { get; set; }
        public string FederalInstitutionNumber { get; set; }
        public string InstitutionStatus { get; set; }
        public DateTime BusinessStartDate { get; set; }
        public DateTime BusinessEndDate { get; set; }
        public Guid? InstitutionGuid { get; set; }

        public virtual ICollection<InstitutionAddress> InstitutionAddresses { get; set; }
        public virtual ICollection<InstitutionEmail> InstitutionEmails { get; set; }
        public virtual ICollection<InstitutionLocation> InstitutionLocations { get; set; }
        public virtual ICollection<InstitutionPhone> InstitutionPhones { get; set; }
        public virtual ICollection<InstitutionPublication> InstitutionPublications { get; set; }
        public virtual ICollection<InstitutionWebsite> InstitutionWebsites { get; set; }
    }
}
