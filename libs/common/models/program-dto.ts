


export class ProgramDto {
    public programId: number = 0;
    public programGovernor: string = '';
    public programNumber: number;
    public programName: string = '';
    public programCode: string = '';
    public programLength: string = '';
    public programCredentialId: number;
    public programTypeId: number;
    public programStatus: string = '';
    public providerId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<ProgramDto>) {
        
        Object.assign(this, init);
    }
}

