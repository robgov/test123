


export class LookupRequest {
    public code: string = '';
    public name: string = '';
    public type: string = '';

    constructor(init? : Partial<LookupRequest>) {
        
        Object.assign(this, init);
    }
}

