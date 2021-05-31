


export class VwInstitutionLocationSummary {
    public institutionId: number = 0;
    public institutionLocationId: number = 0;
    public institutionName: string = '';
    public institutionCode: string = '';
    public operatingType: string = '';
    public institutionCategory: string = '';
    public institutionStatus: string = '';
    public locationName: string = '';
    public locationNumber: number;
    public locationStatus: string = '';
    public isOffSite: boolean;
    public addressUsage: string = '';
    public addressType: string = '';
    public addressLine1: string = '';
    public addressLine2: string = '';
    public addressLine3: string = '';
    public addressLine4: string = '';
    public city: string = '';
    public provinceState: string = '';
    public postalZipCode: string = '';
    public country: string = '';
    public phoneType: string = '';
    public countryCallingCode: string = '';
    public phoneNumber: string = '';
    public extension: string = '';
    public phoneUsage: string = '';
    public emailUsage: string = '';
    public emailType: string = '';
    public emailAddress: string = '';
    public websiteUsage: string = '';
    public websiteUrl: string = '';
    public publishOnWebFlag: boolean;
    public locationPublicationStatus: string = '';
    public subRegion: string = '';
    public publicationDetailStatus: string = '';

    constructor(init? : Partial<VwInstitutionLocationSummary>) {
        
        Object.assign(this, init);
    }
}

