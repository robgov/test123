using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class VwProviderLogo
    {
        public int ProviderId { get; set; }
        public string LogoUrl { get; set; }
        public string GoogleMapOverwrite { get; set; }
    }
}
