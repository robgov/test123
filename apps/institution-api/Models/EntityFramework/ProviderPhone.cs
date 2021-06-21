using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class ProviderPhone
    {
        public int ProviderPhoneId { get; set; }
        public Guid? ProviderPhoneGuid { get; set; }
        public string PhoneUsage { get; set; }
        public string PhoneType { get; set; }
        public int? ListSequence { get; set; }
        public string CountryCallingCode { get; set; }
        public string PhoneNumber { get; set; }
        public string Extension { get; set; }
        public int? ProviderId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public DateTime? DeleteDate { get; set; }
    }
}
