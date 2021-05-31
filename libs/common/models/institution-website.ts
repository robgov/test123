

import { Institution } from './institution';

export class InstitutionWebsite {
    public institutionWebsiteId: number = 0;
    public institutionId: number = 0;
    public websiteGuid: string;
    public websiteUsage: string = '';
    public listSequence: number;
    public websiteUrl: string = '';
    public websiteBusinessStartDate: Date;
    public websiteBusinessEndDate: Date;
    public institution: Institution = new Institution();

    constructor(init? : Partial<InstitutionWebsite>) {
        
        Object.assign(this, init);
    }
}

