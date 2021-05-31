using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models
{
    public partial class VwProviderPublication
    {
        public int ProviderPublicationId { get; set; }
        public string ProviderAdvertisedName { get; set; }
        public string AlternativeInstitutionNameHtml { get; set; }
        public string ProviderOverviewHtml { get; set; }
        public string StandardAdmissionRequirementsHtml { get; set; }
        public string ApplicationDeadlinesHtml { get; set; }
        public string ProviderPublicationStatus { get; set; }
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
        public int? ProviderId { get; set; }
        public DateTime? BusinessStartDate { get; set; }
        public DateTime? BusinessEndDate { get; set; }
    }
}
