


export class ProgramTypeDto {
    public programTypeId: number = 0;
    public programType: string = '';
    public listSequence: number;

    constructor(init? : Partial<ProgramTypeDto>) {
        
        Object.assign(this, init);
    }
}

