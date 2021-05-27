


export class VwCurrentInstitutionLocation {
    public institutionId: number = 0;
    public institutionLocationId: number = 0;
    public institutionName: string = '';
    public institutionCode: string = '';
    public locationName: string = '';
    public locationNumber: number;
    public locationStatus: string = '';
    public isOffSite: boolean;
    public locationGuid: string;

    constructor(init? : Partial<VwCurrentInstitutionLocation>) {
        
        Object.assign(this, init);
    }
}

