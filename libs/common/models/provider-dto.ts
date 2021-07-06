


export class ProviderDto {
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
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<ProviderDto>) {
        
        Object.assign(this, init);
    }
}

