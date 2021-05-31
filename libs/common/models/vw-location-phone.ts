


export class VwLocationPhone {
    public locationPhoneId: number = 0;
    public phoneUsage: string = '';
    public phoneType: string = '';
    public listSequence: number;
    public countryCallingCode: string = '';
    public phoneNumber: string = '';
    public extension: string = '';
    public locationId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<VwLocationPhone>) {
        
        Object.assign(this, init);
    }
}

