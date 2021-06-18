


export class VwPmpPsispecializationCountByCategory {
    public cipSubSeriesCode: string = '';
    public cipSubSeries: string = '';
    public programCount: number;
    public specailizationCount: number;
    public sessionCount: number;
    public providerCount: number;

    constructor(init? : Partial<VwPmpPsispecializationCountByCategory>) {
        
        Object.assign(this, init);
    }
}

