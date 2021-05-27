using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwInstitutionProgram
    {
        public string ProviderName { get; set; }
        public int? ProgramNumber { get; set; }
        public string ProgramCode { get; set; }
        public string ProgramName { get; set; }
        public string ProgramLength { get; set; }
        public string CredentialType { get; set; }
        public string ProgramType { get; set; }
    }
}
