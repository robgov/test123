using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwCurrentInstitution
    {
        public int InstitutionId { get; set; }
        public string OperatingName { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionLegalName { get; set; }
        public string InstitutionShortName { get; set; }
        public string InstitutionType { get; set; }
        public string OperatingType { get; set; }
        public string HomeJurisdiction { get; set; }
        public string InstitutionCategory { get; set; }
        public string InstitutionCode { get; set; }
        public int? ProvincialInstitutionNumber { get; set; }
        public string FederalInstitutionNumber { get; set; }
        public string InstitutionStatus { get; set; }
        public DateTime BusinessStartDate { get; set; }
        public DateTime BusinessEndDate { get; set; }
        public Guid? InstitutionGuid { get; set; }
    }
}
