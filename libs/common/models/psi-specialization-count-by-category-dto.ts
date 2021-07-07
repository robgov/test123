


export class PsiSpecializationCountByCategoryDto {
    public cipSubSeriesCode: string = '';
    public cipSubSeries: string = '';
    public programCount: number;
    public specailizationCount: number;
    public sessionCount: number;
    public providerCount: number;

    constructor(init? : Partial<PsiSpecializationCountByCategoryDto>) {
        
        Object.assign(this, init);
    }
}

