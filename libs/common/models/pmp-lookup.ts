


export class PmpLookup {
    public code: string = '';
    public type: string = '';
    public name: string = '';
    public displayOrder: number = 0;

    constructor(init? : Partial<PmpLookup>) {
        
        Object.assign(this, init);
    }
}

