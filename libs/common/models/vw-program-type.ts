


export class VwProgramType {
    public programTypeId: number = 0;
    public programType: string = '';
    public listSequence: number;

    constructor(init? : Partial<VwProgramType>) {
        
        Object.assign(this, init);
    }
}

