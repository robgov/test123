using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProviderLogo1
    {
        public string Name { get; set; }
        public string LogoImage { get; set; }
        public string Guid { get; set; }
        public bool? DisplayProgramChart { get; set; }
        public bool? DisplayApplyAlbertaButton { get; set; }
        public string GoogleMapOverwrite { get; set; }
        public bool? HasFeatureChartData { get; set; }
        public string SchoolFeatures { get; set; }
    }
}
