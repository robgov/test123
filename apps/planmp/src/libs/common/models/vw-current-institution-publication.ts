


export class VwCurrentInstitutionPublication {
    public institutionPublicationId: number = 0;
    public institutionId: number = 0;
    public institutionType: string = '';
    public institutionName: string = '';
    public institutionCode: string = '';
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
    public institutionPublicationGuid: string;
    public institutionPublicationBusinessStartDate: Date;
    public institutionPublicationBusinessEndDate: Date;

    constructor(init? : Partial<VwCurrentInstitutionPublication>) {
        
        Object.assign(this, init);
    }
}

