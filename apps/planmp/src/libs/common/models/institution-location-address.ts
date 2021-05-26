

import { InstitutionLocation } from './institution-location';

export class InstitutionLocationAddress {
    public institutionLocationAddressId: number = 0;
    public institutionLocationId: number;
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
    public institutionLocation: InstitutionLocation = new InstitutionLocation();

    constructor(init? : Partial<InstitutionLocationAddress>) {
        
        Object.assign(this, init);
    }
}

