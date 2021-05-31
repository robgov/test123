

import { Institution } from './institution';

export class InstitutionPhone {
    public institutionPhoneId: number = 0;
    public institutionId: number = 0;
    public phoneGuid: string;
    public phoneType: string = '';
    public phoneUsage: string = '';
    public listSequence: number;
    public countryCallingCode: string = '';
    public phoneNumber: string = '';
    public extension: string = '';
    public phoneBusinessStartDate: Date;
    public phoneBusinessEndDate: Date;
    public institution: Institution = new Institution();

    constructor(init? : Partial<InstitutionPhone>) {
        
        Object.assign(this, init);
    }
}

