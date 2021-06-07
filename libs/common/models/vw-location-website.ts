


export class VwLocationWebsite {
    public locationWebsiteId: number = 0;
    public websiteUsage: string = '';
    public listSequence: number;
    public websiteUrl: string = '';
    public locationId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<VwLocationWebsite>) {
        
        Object.assign(this, init);
    }
}

