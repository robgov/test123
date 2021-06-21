using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProgramPublication
    {
        public int ProgramPublicationId { get; set; }
        public Guid? ProgramPublicationGuid { get; set; }
        public string ProgramAdvertisedName { get; set; }
        public string ProgramPublicationStatus { get; set; }
        public bool? PublishFundingFlag { get; set; }
        public bool? PublishOnWebsiteFlag { get; set; }
        public int? ProgramId { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
