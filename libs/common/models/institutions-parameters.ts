


export class InstitutionsParameters {
    public pageNumber: number = 0;
    public pageSize: number = 0;
    public institutionName: string = '';

    constructor(init? : Partial<InstitutionsParameters>) {
        
        Object.assign(this, init);
    }
}

