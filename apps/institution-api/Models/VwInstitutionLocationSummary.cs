using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwInstitutionLocationSummary
    {
        public int InstitutionId { get; set; }
        public int InstitutionLocationId { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionCode { get; set; }
        public string OperatingType { get; set; }
        public string InstitutionCategory { get; set; }
        public string InstitutionStatus { get; set; }
        public string LocationName { get; set; }
        public int? LocationNumber { get; set; }
        public string LocationStatus { get; set; }
        public bool? IsOffSite { get; set; }
        public string AddressUsage { get; set; }
        public string AddressType { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string AddressLine4 { get; set; }
        public string City { get; set; }
        public string ProvinceState { get; set; }
        public string PostalZipCode { get; set; }
        public string Country { get; set; }
        public string PhoneType { get; set; }
        public string CountryCallingCode { get; set; }
        public string PhoneNumber { get; set; }
        public string Extension { get; set; }
        public string PhoneUsage { get; set; }
        public string EmailUsage { get; set; }
        public string EmailType { get; set; }
        public string EmailAddress { get; set; }
        public string WebsiteUsage { get; set; }
        public string WebsiteUrl { get; set; }
        public bool? PublishOnWebFlag { get; set; }
        public string LocationPublicationStatus { get; set; }
        public string SubRegion { get; set; }
        public string PublicationDetailStatus { get; set; }
    }
}
