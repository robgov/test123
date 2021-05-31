using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwProgramPublication
    {
        public int ProgramPublicationId { get; set; }
        public string ProgramAdvertisedName { get; set; }
        public string ProgramPublicationStatus { get; set; }
        public bool? PublishFundingFlag { get; set; }
        public bool? PublishOnWebsiteFlag { get; set; }
        public int? ProgramId { get; set; }
    }
}
