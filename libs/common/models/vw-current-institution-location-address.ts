


export class VwCurrentInstitutionLocationAddress {
    public institutionLocationAddressId: number;
    public institutionId: number = 0;
    public institutionLocationId: number = 0;
    public institutionName: string = '';
    public institutionCode: string = '';
    public institutionStatus: string = '';
    public locationName: string = '';
    public locationNumber: number;
    public locationStatus: string = '';
    public isOffSite: boolean;
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

    constructor(init? : Partial<VwCurrentInstitutionLocationAddress>) {
        
        Object.assign(this, init);
    }
}

