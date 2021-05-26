


export class SchemaSnapshot {
    public snapshot: number[] = [];
    public lastUpdateDate: Date;

    constructor(init? : Partial<SchemaSnapshot>) {
        
        Object.assign(this, init);
    }
}

