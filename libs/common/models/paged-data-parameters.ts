


export class PagedDataParameters {
    public pageNumber: number = 0;
    public pageSize: number = 0;

    constructor(init? : Partial<PagedDataParameters>) {
        
        Object.assign(this, init);
    }
}

