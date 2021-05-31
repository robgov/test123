

import { InstitutionAddress } from './institution-address';
import { InstitutionEmail } from './institution-email';
import { InstitutionLocation } from './institution-location';
import { InstitutionPhone } from './institution-phone';
import { InstitutionPublication } from './institution-publication';
import { InstitutionWebsite } from './institution-website';

export class Institution {
    public institutionId: number = 0;
    public operatingName: string = '';
    public institutionName: string = '';
    public institutionLegalName: string = '';
    public institutionShortName: string = '';
    public institutionType: string = '';
    public operatingType: string = '';
    public homeJurisdiction: string = '';
    public instituitionCategory: string = '';
    public institutionCode: string = '';
    public paprsinstitutionNumber: number = 0;
    public provincialInstitutionNumber: number;
    public federalInstitutionNumber: string = '';
    public institutionStatus: string = '';
    public businessStartDate: string = '';
    public businessEndDate: string = '';
    public institutionGuid: string;
    public institutionAddresses: InstitutionAddress[] = [];
    public institutionEmails: InstitutionEmail[] = [];
    public institutionLocations: InstitutionLocation[] = [];
    public institutionPhones: InstitutionPhone[] = [];
    public institutionPublications: InstitutionPublication[] = [];
    public institutionWebsites: InstitutionWebsite[] = [];

    constructor(init? : Partial<Institution>) {
        
        Object.assign(this, init);
    }
}

