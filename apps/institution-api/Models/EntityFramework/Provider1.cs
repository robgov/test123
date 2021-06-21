﻿using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class Provider1
    {
        public Guid? ProviderGuid { get; set; }
        public string ProviderGovernor { get; set; }
        public string OperatingName { get; set; }
        public string ProviderName { get; set; }
        public string ProviderLegalName { get; set; }
        public string ProviderType { get; set; }
        public Guid? ProviderTypeGuid { get; set; }
        public string OperatingType { get; set; }
        public string HomeJurisdiction { get; set; }
        public int? ProviderNumber { get; set; }
        public string ProviderStatus { get; set; }
        public string ProviderPspstatus { get; set; }
        public string ProviderPspcode { get; set; }
        public string ProviderPspcategory { get; set; }
        public string ProviderPspshortName { get; set; }
        public int? ProvincialProviderNumber { get; set; }
        public string FederalProviderNumber { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
    }
}
