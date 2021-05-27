

import { Institution } from './institution';

export class InstitutionAddress {
    public institutionAddressId: number = 0;
    public institutionId: number = 0;
    public addressGuid: string;
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
    public addressBusinessStartDate: Date;
    public addressBusinessEndDate: Date;
    public institution: Institution = new Institution();

    constructor(init? : Partial<InstitutionAddress>) {
        
        Object.assign(this, init);
    }
}

