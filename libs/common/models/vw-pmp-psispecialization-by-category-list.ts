


export class VwPmpPsispecializationByCategoryList {
    public cipSubSeriesCode: string = '';
    public cipSubSeries: string = '';
    public providerName: string = '';
    public logoUrl: string = '';
    public programName: string = '';
    public specializationName: string = '';
    public specializationId: number = 0;

    constructor(init? : Partial<VwPmpPsispecializationByCategoryList>) {
        
        Object.assign(this, init);
    }
}

