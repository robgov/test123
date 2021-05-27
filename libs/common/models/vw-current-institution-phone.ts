


export class VwCurrentInstitutionPhone {
    public institutionPhoneId: number = 0;
    public institutionId: number = 0;
    public institutionType: string = '';
    public institutionName: string = '';
    public institutionCode: string = '';
    public phoneUsage: string = '';
    public phoneType: string = '';
    public listSequence: number;
    public countryCallingCode: string = '';
    public phoneNumber: string = '';
    public extension: string = '';
    public phoneGuid: string;

    constructor(init? : Partial<VwCurrentInstitutionPhone>) {
        
        Object.assign(this, init);
    }
}

