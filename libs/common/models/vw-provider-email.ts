


export class VwProviderEmail {
    public providerEmailId: number = 0;
    public emailUsage: string = '';
    public emailType: string = '';
    public listSequence: number;
    public emailAddress: string = '';
    public providerId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<VwProviderEmail>) {
        
        Object.assign(this, init);
    }
}

