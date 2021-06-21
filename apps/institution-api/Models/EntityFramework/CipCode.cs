using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class CipCode
    {
        public int CipCodeId { get; set; }
        public string CipCode1 { get; set; }
        public string CipDescription { get; set; }
        public string CipDefinition { get; set; }
        public string CipSubSeriesCode { get; set; }
        public string CipSubSeries { get; set; }
        public string CipSubSeriesDefinition { get; set; }
        public string CipSeriesCode { get; set; }
        public string CipSeriesDescription { get; set; }
        public string CipSeriesDefinition { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
