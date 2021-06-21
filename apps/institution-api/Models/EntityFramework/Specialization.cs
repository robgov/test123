using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class Specialization
    {
        public int SpecializationId { get; set; }
        public Guid SpecializationGuid { get; set; }
        public int? SpecializationNumber { get; set; }
        public string SpecializationName { get; set; }
        public string SpecializationCode { get; set; }
        public string SpecializationStatus { get; set; }
        public int? CipCodeId { get; set; }
        public string AdministrativeUnitCode { get; set; }
        public string AdministrativeUnit { get; set; }
        public string EntranceRequirementCode { get; set; }
        public string EntranceRequirement { get; set; }
        public string UnitOfLoad { get; set; }
        public string PrimaryFundingCode { get; set; }
        public int? ProgramId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
