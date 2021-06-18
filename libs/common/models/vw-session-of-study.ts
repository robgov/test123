


export class VwSessionOfStudy {
    public sessionOfStudyId: number = 0;
    public sessionOfStudyGuid: string;
    public fundingYearCode: string = '';
    public fundingYear: string = '';
    public displayOnSfsflag: boolean;
    public studyYear: number;
    public sessionStartDate: Date;
    public sessionEndDate: Date;
    public specializationId: number;

    constructor(init? : Partial<VwSessionOfStudy>) {
        
        Object.assign(this, init);
    }
}

