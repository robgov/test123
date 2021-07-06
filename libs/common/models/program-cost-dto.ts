


export class ProgramCostDto {
    public programId: number;
    public tuition: number;
    public books: number;
    public other: number;

    constructor(init? : Partial<ProgramCostDto>) {
        
        Object.assign(this, init);
    }
}

