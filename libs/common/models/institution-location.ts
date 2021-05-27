

import { Institution } from './institution';
import { InstitutionLocationAddress } from './institution-location-address';
import { InstitutionLocationEmail } from './institution-location-email';
import { InstitutionLocationPhone } from './institution-location-phone';
import { InstitutionLocationPublication } from './institution-location-publication';
import { InstitutionLocationWebsite } from './institution-location-website';

export class InstitutionLocation {
    public institutionLocationId: number = 0;
    public institutionId: number = 0;
    public locationName: string = '';
    public locationNumber: number;
    public isOffSite: boolean;
    public locationStatus: string = '';
    public providerGuid: string;
    public locationGuid: string;
    public providerBusinessStartDate: Date;
    public providerBusinessEndDate: Date;
    public locationBusinessStartDate: Date;
    public locationBusinessEndDate: Date;
    public institution: Institution = new Institution();
    public institutionLocationAddresses: InstitutionLocationAddress[] = [];
    public institutionLocationEmails: InstitutionLocationEmail[] = [];
    public institutionLocationPhones: InstitutionLocationPhone[] = [];
    public institutionLocationPublications: InstitutionLocationPublication[] = [];
    public institutionLocationWebsites: InstitutionLocationWebsite[] = [];

    constructor(init? : Partial<InstitutionLocation>) {
        
        Object.assign(this, init);
    }
}

