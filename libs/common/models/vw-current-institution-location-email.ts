


export class VwCurrentInstitutionLocationEmail {
    public institutionLocationEmailId: number;
    public institutionId: number = 0;
    public institutionLocationId: number = 0;
    public institutionName: string = '';
    public institutionCode: string = '';
    public institutionStatus: string = '';
    public locationName: string = '';
    public locationNumber: number;
    public locationStatus: string = '';
    public isOffSite: boolean;
    public emailUsage: string = '';
    public emailType: string = '';
    public listSequence: number;
    public emailAddress: string = '';
    public emailGuid: string;

    constructor(init? : Partial<VwCurrentInstitutionLocationEmail>) {
        
        Object.assign(this, init);
    }
}

