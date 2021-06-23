using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class VwProgramCredential
    {
        public int ProgramCredentialId { get; set; }
        public string ProgramCredential { get; set; }
        public int? ListSequence { get; set; }
    }
}
