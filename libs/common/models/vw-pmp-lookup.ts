


export class VwPmpLookup {
    public code: string = '';
    public type: string = '';
    public name: string = '';
    public displayOrder: number = 0;
    public value: string = '';

    constructor(init? : Partial<VwPmpLookup>) {
        
        Object.assign(this, init);
    }
}

