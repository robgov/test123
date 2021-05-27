


export class VwCurrentInstitutionLocationPublication {
    public institutionLocationPublicationId: number;
    public institutionId: number = 0;
    public institutionLocationId: number = 0;
    public institutionName: string = '';
    public institutionCode: string = '';
    public institutionStatus: string = '';
    public locationName: string = '';
    public locationNumber: number;
    public locationStatus: string = '';
    public publishOnWebFlag: boolean;
    public locationPublicationStatus: string = '';
    public subRegion: string = '';
    public publicationDetailStatus: string = '';
    public locationPublicationGuid: string;

    constructor(init? : Partial<VwCurrentInstitutionLocationPublication>) {
        
        Object.assign(this, init);
    }
}

