


export class VwInstitutionSummary {
    public institutionId: number = 0;
    public operatingName: string = '';
    public institutionName: string = '';
    public institutionLegalName: string = '';
    public institutionShortName: string = '';
    public institutionType: string = '';
    public operatingType: string = '';
    public homeJurisdiction: string = '';
    public institutionCategory: string = '';
    public institutionCode: string = '';
    public provincialInstitutionNumber: number;
    public federalInstitutionNumber: string = '';
    public institutionStatus: string = '';
    public addressUsage: string = '';
    public addressType: string = '';
    public addressLine1: string = '';
    public addressLine2: string = '';
    public addressLine3: string = '';
    public addressLine4: string = '';
    public city: string = '';
    public provinceState: string = '';
    public postalZipCode: string = '';
    public country: string = '';
    public phoneType: string = '';
    public countryCallingCode: string = '';
    public phoneNumber: string = '';
    public extension: string = '';
    public phoneUsage: string = '';
    public emailUsage: string = '';
    public emailType: string = '';
    public emailAddress: string = '';
    public websiteUsage: string = '';
    public websiteUrl: string = '';
    public providerAdvertisedName: string = '';
    public alternativeInstitutionNameHtml: string = '';
    public providerOverviewHtml: string = '';
    public standardAdmissionRequirementsHtml: string = '';
    public applicationDeadlinesHtmL: string = '';
    public providerPublicationStatus: string = '';
    public providerCategory: string = '';
    public publishOnWebsiteFlag: boolean;
    public publishOnFundingFlag: boolean;
    public featureChart: number;
    public offersChildCareFlag: boolean;
    public offersContinuingEducationFlag: boolean;
    public offersCounselingServicesFlag: boolean;
    public offersDisabledStudentServicesFlag: boolean;
    public offersFitnessFacilitiesFlag: boolean;
    public offersFoodServicesFlag: boolean;
    public offersHealthServicesFlag: boolean;
    public offersHousingFlag: boolean;
    public offersJobSearchServicesFlag: boolean;
    public offersOrientationProgramFlag: boolean;
    public offersParkingFlag: boolean;
    public studentPopulation: string = '';
    public publicationDetailStatus: string = '';

    constructor(init? : Partial<VwInstitutionSummary>) {
        
        Object.assign(this, init);
    }
}

