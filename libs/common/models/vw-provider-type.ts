


export class VwProviderType {
    public providerTypeId: number = 0;
    public providerType: string = '';
    public listSequence: number;

    constructor(init? : Partial<VwProviderType>) {
        
        Object.assign(this, init);
    }
}

