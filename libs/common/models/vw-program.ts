


export class VwProgram {
    public programId: number = 0;
    public programGovernor: string = '';
    public programNumber: number;
    public programName: string = '';
    public programCode: string = '';
    public programLength: string = '';
    public credentialType: string = '';
    public programType: string = '';
    public programStatus: string = '';
    public providerId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<VwProgram>) {
        
        Object.assign(this, init);
    }
}

