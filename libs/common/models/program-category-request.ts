


export class ProgramCategoryRequest {
    public programCategory: string = '';

    constructor(init? : Partial<ProgramCategoryRequest>) {
        
        Object.assign(this, init);
    }
}

