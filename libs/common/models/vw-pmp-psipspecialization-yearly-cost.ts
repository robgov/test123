


export class VwPmpPsipspecializationYearlyCost {
    public specializationId: number = 0;
    public sessionOfStudyId: number = 0;
    public sessionStartDate: Date;
    public sessionEndDate: Date;
    public cost: number;

    constructor(init? : Partial<VwPmpPsipspecializationYearlyCost>) {
        
        Object.assign(this, init);
    }
}

