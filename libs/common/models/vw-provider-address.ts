


export class VwProviderAddress {
    public providerAddressId: number = 0;
    public addressUsage: string = '';
    public addressType: string = '';
    public listSequence: number;
    public addressLine1: string = '';
    public addressLine2: string = '';
    public addressLine3: string = '';
    public addressLine4: string = '';
    public city: string = '';
    public provinceState: string = '';
    public postalZipCode: string = '';
    public country: string = '';
    public verifiedFlag: boolean;
    public providerId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<VwProviderAddress>) {
        
        Object.assign(this, init);
    }
}

