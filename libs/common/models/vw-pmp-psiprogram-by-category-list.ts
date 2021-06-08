


export class VwPmpPsiprogramByCategoryList {
    public cipSubSeriesCode: string = '';
    public cipSubSeries: string = '';
    public providerName: string = '';
    public logoUrl: string = '';
    public programName: string = '';
    public programId: number = 0;

    constructor(init? : Partial<VwPmpPsiprogramByCategoryList>) {
        
        Object.assign(this, init);
    }
}

