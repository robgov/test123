using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwInstitutionSummary
    {
        public int InstitutionId { get; set; }
        public string OperatingName { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionLegalName { get; set; }
        public string InstitutionShortName { get; set; }
        public string InstitutionType { get; set; }
        public string OperatingType { get; set; }
        public string HomeJurisdiction { get; set; }
        public string InstitutionCategory { get; set; }
        public string InstitutionCode { get; set; }
        public int? ProvincialInstitutionNumber { get; set; }
        public string FederalInstitutionNumber { get; set; }
        public string InstitutionStatus { get; set; }
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
        public string ProviderAdvertisedName { get; set; }
        public string AlternativeInstitutionNameHtml { get; set; }
        public string ProviderOverviewHtml { get; set; }
        public string StandardAdmissionRequirementsHtml { get; set; }
        public string ApplicationDeadlinesHtmL { get; set; }
        public string ProviderPublicationStatus { get; set; }
        public string ProviderCategory { get; set; }
        public bool? PublishOnWebsiteFlag { get; set; }
        public bool? PublishOnFundingFlag { get; set; }
        public int? FeatureChart { get; set; }
        public bool? OffersChildCareFlag { get; set; }
        public bool? OffersContinuingEducationFlag { get; set; }
        public bool? OffersCounselingServicesFlag { get; set; }
        public bool? OffersDisabledStudentServicesFlag { get; set; }
        public bool? OffersFitnessFacilitiesFlag { get; set; }
        public bool? OffersFoodServicesFlag { get; set; }
        public bool? OffersHealthServicesFlag { get; set; }
        public bool? OffersHousingFlag { get; set; }
        public bool? OffersJobSearchServicesFlag { get; set; }
        public bool? OffersOrientationProgramFlag { get; set; }
        public bool? OffersParkingFlag { get; set; }
        public string StudentPopulation { get; set; }
        public string PublicationDetailStatus { get; set; }
    }
}
