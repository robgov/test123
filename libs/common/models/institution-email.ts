

import { Institution } from './institution';

export class InstitutionEmail {
    public institutionEmailId: number = 0;
    public institutionId: number = 0;
    public emailGuid: string;
    public emailUsage: string = '';
    public emailType: string = '';
    public listSequence: number;
    public emailAddress: string = '';
    public emailBusinessStartDate: Date;
    public emailBusinessEndDate: Date;
    public institution: Institution = new Institution();

    constructor(init? : Partial<InstitutionEmail>) {
        
        Object.assign(this, init);
    }
}

