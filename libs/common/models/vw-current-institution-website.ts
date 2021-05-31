


export class VwCurrentInstitutionWebsite {
    public institutionWebsiteId: number = 0;
    public institutionId: number = 0;
    public institutionType: string = '';
    public institutionName: string = '';
    public institutionCode: string = '';
    public websiteUsage: string = '';
    public listSequence: number;
    public websiteUrl: string = '';
    public websiteGuid: string;

    constructor(init? : Partial<VwCurrentInstitutionWebsite>) {
        
        Object.assign(this, init);
    }
}

