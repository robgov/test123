


export class LookupDto {
    public code: string = '';
    public type: string = '';
    public name: string = '';
    public displayOrder: number = 0;
    public value: string = '';

    constructor(init? : Partial<LookupDto>) {
        
        Object.assign(this, init);
    }
}

