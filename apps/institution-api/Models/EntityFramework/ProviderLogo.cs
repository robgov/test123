using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProviderLogo
    {
        public int ProviderLogoId { get; set; }
        public int ProviderId { get; set; }
        public Guid? ProviderGuid { get; set; }
        public string LogoUrl { get; set; }
        public string GoogleMapOverwrite { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
