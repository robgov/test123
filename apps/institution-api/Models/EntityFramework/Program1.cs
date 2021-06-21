using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class Program1
    {
        public Guid? ProgramGuid { get; set; }
        public string ProgramGovernor { get; set; }
        public int? ProgramNumber { get; set; }
        public string ProgramName { get; set; }
        public string ProgramCode { get; set; }
        public string ProgramLength { get; set; }
        public Guid? ProgramCredentialGuid { get; set; }
        public Guid? ProgramTypeGuid { get; set; }
        public string ProgramStatus { get; set; }
        public Guid? ProviderGuid { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
