using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class Program
    {
        public int ProgramId { get; set; }
        public Guid ProgramGuid { get; set; }
        public string ProgramGovernor { get; set; }
        public int? ProgramNumber { get; set; }
        public string ProgramName { get; set; }
        public string ProgramCode { get; set; }
        public string ProgramLength { get; set; }
        public int? ProgramCredentialId { get; set; }
        public int? ProgramTypeId { get; set; }
        public string ProgramStatus { get; set; }
        public int? ProviderId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
