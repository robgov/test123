

import { InstitutionLocation } from './institution-location';

export class InstitutionLocationWebsite {
    public institutionLocationWebsiteId: number = 0;
    public institutionLocationId: number;
    public websiteGuid: string = '';
    public websiteUsage: string = '';
    public listSequence: number;
    public websiteUrl: string = '';
    public websiteBusinessStartDate: Date;
    public websiteBusinessEndDate: Date;
    public institutionLocation: InstitutionLocation = new InstitutionLocation();

    constructor(init? : Partial<InstitutionLocationWebsite>) {
        
        Object.assign(this, init);
    }
}

