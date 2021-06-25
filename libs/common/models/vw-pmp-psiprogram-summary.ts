


export class VwPmpPsiprogramSummary {
    public providerId: number = 0;
    public providerGovernor: string = '';
    public operatingName: string = '';
    public providerName: string = '';
    public providerLegalName: string = '';
    public providerTypeId: number;
    public providerType: string = '';
    public operatingType: string = '';
    public homeJurisdiction: string = '';
    public providerNumber: number;
    public providerStatus: string = '';
    public providerPspstatus: string = '';
    public providerPspcode: string = '';
    public providerPspcategory: string = '';
    public providerPspshortName: string = '';
    public provincialProviderNumber: number;
    public federalProviderNumber: string = '';
    public programId: number = 0;
    public programGovernor: string = '';
    public programNumber: number;
    public programName: string = '';
    public programCode: string = '';
    public programLength: string = '';
    public programCredentialId: number;
    public programTypeId: number;
    public programStatus: string = '';
    public providerAddressId: number = 0;
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
    public postalCode: string = '';
    public latitude: number;
    public longitude: number;
    public programType: string = '';
    public providerWebsiteId: number = 0;
    public websiteUrl: string = '';
    public programCredential: string = '';

    constructor(init? : Partial<VwPmpPsiprogramSummary>) {
        
        Object.assign(this, init);
    }
}

