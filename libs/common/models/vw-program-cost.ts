


export class VwProgramCost {
    public programId: number;
    public tuition: number;
    public books: number;
    public other: number;

    constructor(init? : Partial<VwProgramCost>) {
        
        Object.assign(this, init);
    }
}

