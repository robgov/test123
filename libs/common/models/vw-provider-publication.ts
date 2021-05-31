


export class VwProviderPublication {
    public providerPublicationId: number = 0;
    public providerAdvertisedName: string = '';
    public alternativeInstitutionNameHtml: string = '';
    public providerOverviewHtml: string = '';
    public standardAdmissionRequirementsHtml: string = '';
    public applicationDeadlinesHtml: string = '';
    public providerPublicationStatus: string = '';
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
    public providerId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<VwProviderPublication>) {
        
        Object.assign(this, init);
    }
}

