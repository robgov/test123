using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class Program
    {
        public int ProgramId { get; set; }
        public string ProgramGovernor { get; set; }
        public Guid? ProgramGuid { get; set; }
        public int? ProgramNumber { get; set; }
        public string ProgramName { get; set; }
        public string ProgramCode { get; set; }
        public string ProgramLength { get; set; }
        public string CredentialType { get; set; }
        public string ProgramType { get; set; }
        public string ProgramStatus { get; set; }
        public string ProviderGovernor { get; set; }
        public string ProviderName { get; set; }
        public Guid? ProviderGuid { get; set; }
        public DateTime? ProgramStartDate { get; set; }
        public DateTime? ProgramEndDate { get; set; }
        public string ProgramAdvertisedName { get; set; }
        public string ProgramPublicationStatus { get; set; }
        public bool? PublishFunding { get; set; }
        public bool? PublishOnWebsite { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
