


export class VwPmpPsispecializationByCategoryList {
    public cipSubSeriesCode: string = '';
    public cipSubSeries: string = '';
    public providerName: string = '';
    public logoUrl: string = '';
    public programName: string = '';
    public specializationName: string = '';
    public specializationId: number = 0;
    public programNumber: number;
    public specializationNumber: number;
    public programCode: string = '';
    public specializationCode: string = '';
    public sessionStartDate: Date;
    public sessionEndDate: Date;

    constructor(init? : Partial<VwPmpPsispecializationByCategoryList>) {
        
        Object.assign(this, init);
    }
}

