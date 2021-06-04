


export class ProviderProgramRequest {
    public providerId: number = 0;

    constructor(init? : Partial<ProviderProgramRequest>) {
        
        Object.assign(this, init);
    }
}

