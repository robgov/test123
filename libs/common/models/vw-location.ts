


export class VwLocation {
    public locationId: number = 0;
    public locationName: string = '';
    public locationNumber: number;
    public locationStatus: string = '';
    public offSiteFlag: boolean;
    public locationPspstatus: string = '';
    public providerId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<VwLocation>) {
        
        Object.assign(this, init);
    }
}

