


export class VwProviderPhone {
    public providerPhoneId: number = 0;
    public phoneUsage: string = '';
    public phoneType: string = '';
    public listSequence: number;
    public countryCallingCode: string = '';
    public phoneNumber: string = '';
    public extension: string = '';
    public providerId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<VwProviderPhone>) {
        
        Object.assign(this, init);
    }
}

