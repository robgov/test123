


export class VwCurrentInstitution {
    public institutionId: number = 0;
    public operatingName: string = '';
    public institutionName: string = '';
    public institutionLegalName: string = '';
    public institutionShortName: string = '';
    public institutionType: string = '';
    public operatingType: string = '';
    public homeJurisdiction: string = '';
    public institutionCategory: string = '';
    public institutionCode: string = '';
    public provincialInstitutionNumber: number;
    public federalInstitutionNumber: string = '';
    public institutionStatus: string = '';
    public businessStartDate: string = '';
    public businessEndDate: string = '';
    public institutionGuid: string;

    constructor(init? : Partial<VwCurrentInstitution>) {
        
        Object.assign(this, init);
    }
}

