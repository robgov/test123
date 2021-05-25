


export class VwCurrentInstitutionAddress {
    public institutionAddressId: number = 0;
    public institutionId: number = 0;
    public institutionType: string = '';
    public institutionName: string = '';
    public institutionCode: string = '';
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
    public addressGuid: string;

    constructor(init? : Partial<VwCurrentInstitutionAddress>) {
        
        Object.assign(this, init);
    }
}

