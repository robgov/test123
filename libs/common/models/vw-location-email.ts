


export class VwLocationEmail {
    public locationEmailId: number = 0;
    public emailUsage: string = '';
    public emailType: string = '';
    public listSequence: number;
    public emailAddress: string = '';
    public locationId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<VwLocationEmail>) {
        
        Object.assign(this, init);
    }
}

