


export class VwCurrentInstitutionLocationPhone {
    public institutionLocationPhoneId: number;
    public institutionId: number = 0;
    public institutionLocationId: number = 0;
    public institutionName: string = '';
    public institutionCode: string = '';
    public institutionStatus: string = '';
    public locationName: string = '';
    public locationNumber: number;
    public locationStatus: string = '';
    public phoneUsage: string = '';
    public phoneType: string = '';
    public listSequence: number;
    public countryCallingCode: string = '';
    public phoneNumber: string = '';
    public extension: string = '';
    public phoneGuid: string;

    constructor(init? : Partial<VwCurrentInstitutionLocationPhone>) {
        
        Object.assign(this, init);
    }
}

