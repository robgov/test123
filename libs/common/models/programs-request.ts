


export class ProgramsRequest {
    public providerId: number;
    public cipSubSeriesCode: string = '';

    constructor(init? : Partial<ProgramsRequest>) {
        
        Object.assign(this, init);
    }
}

