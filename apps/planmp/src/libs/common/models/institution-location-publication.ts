

import { InstitutionLocation } from './institution-location';

export class InstitutionLocationPublication {
    public institutionLocationPublicationId: number = 0;
    public institutionLocationId: number;
    public locationPublicationGuid: string = '';
    public isPublishedOnWebsite: boolean;
    public locationPublicationStatus: string = '';
    public subRegion: string = '';
    public publicationDetailStatus: string = '';
    public publicationBusinessStartDate: Date;
    public publicationBusinessEndDate: Date;
    public institutionLocation: InstitutionLocation = new InstitutionLocation();

    constructor(init? : Partial<InstitutionLocationPublication>) {
        
        Object.assign(this, init);
    }
}

