

import { InstitutionLocation } from './institution-location';

export class InstitutionLocationPhone {
    public institutionLocationPhoneId: number = 0;
    public institutionLocationId: number = 0;
    public phoneGuid: string = '';
    public phoneUsage: string = '';
    public phoneType: string = '';
    public listSequence: number;
    public countryCallingCode: string = '';
    public phoneNumber: string = '';
    public extension: string = '';
    public phoneBusinessStartDate: Date;
    public phoneBusinessEndDate: Date;
    public institutionLocation: InstitutionLocation = new InstitutionLocation();

    constructor(init? : Partial<InstitutionLocationPhone>) {
        
        Object.assign(this, init);
    }
}

