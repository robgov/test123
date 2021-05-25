


export class VwCurrentInstitutionEmail {
    public institutionEmailId: number = 0;
    public institutionId: number = 0;
    public institutionType: string = '';
    public institutionName: string = '';
    public institutionCode: string = '';
    public emailUsage: string = '';
    public emailType: string = '';
    public listSequence: number;
    public emailAddress: string = '';
    public emailGuid: string;

    constructor(init? : Partial<VwCurrentInstitutionEmail>) {
        
        Object.assign(this, init);
    }
}

