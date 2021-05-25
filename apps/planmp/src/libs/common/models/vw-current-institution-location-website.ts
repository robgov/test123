


export class VwCurrentInstitutionLocationWebsite {
    public institutionLocationWebsiteId: number;
    public institutionId: number = 0;
    public institutionLocationId: number = 0;
    public institutionName: string = '';
    public institutionCode: string = '';
    public institutionStatus: string = '';
    public locationName: string = '';
    public locationNumber: number;
    public locationStatus: string = '';
    public websiteUsage: string = '';
    public listSequence: number;
    public websiteUrl: string = '';
    public websiteGuid: string;

    constructor(init? : Partial<VwCurrentInstitutionLocationWebsite>) {
        
        Object.assign(this, init);
    }
}

