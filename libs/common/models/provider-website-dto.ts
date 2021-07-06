


export class ProviderWebsiteDto {
    public providerWebsiteId: number = 0;
    public websiteUsage: string = '';
    public listSequence: number;
    public websiteUrl: string = '';
    public providerId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<ProviderWebsiteDto>) {
        
        Object.assign(this, init);
    }
}

