


export class SpecializationYearlyCostDto {
    public specializationId: number = 0;
    public sessionOfStudyId: number = 0;
    public sessionStartDate: Date;
    public sessionEndDate: Date;
    public cost: number;

    constructor(init? : Partial<SpecializationYearlyCostDto>) {
        
        Object.assign(this, init);
    }
}

