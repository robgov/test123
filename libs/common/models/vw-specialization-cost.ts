


export class VwSpecializationCost {
    public specializationId: number = 0;
    public programId: number;
    public providerId: number;
    public sessionOfStudyId: number = 0;
    public fundingYearCode: string = '';
    public sessionStartDate: Date;
    public sessionEndDate: Date;
    public costType: string = '';
    public amount: number;
    public studyYear: number;
    public displayOnSfsflag: boolean;

    constructor(init? : Partial<VwSpecializationCost>) {
        
        Object.assign(this, init);
    }
}

