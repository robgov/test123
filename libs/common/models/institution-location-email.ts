

import { InstitutionLocation } from './institution-location';

export class InstitutionLocationEmail {
    public institutionLocationEmailId: number = 0;
    public institutionLocationId: number;
    public emailGuid: string = '';
    public emailUsage: string = '';
    public emailType: string = '';
    public listSequence: number;
    public emailAddress: string = '';
    public emailBusinessStartDate: Date;
    public emailBusinessEndDate: Date;
    public institutionLocation: InstitutionLocation = new InstitutionLocation();

    constructor(init? : Partial<InstitutionLocationEmail>) {
        
        Object.assign(this, init);
    }
}

