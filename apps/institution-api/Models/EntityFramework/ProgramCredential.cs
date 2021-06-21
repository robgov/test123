using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProgramCredential
    {
        public int ProgramCredentialId { get; set; }
        public Guid ProgramCredentialGuid { get; set; }
        public string ProgramCredential1 { get; set; }
        public int? ListSequence { get; set; }
        public DateTime LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
