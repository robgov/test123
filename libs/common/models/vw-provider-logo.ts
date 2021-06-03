


export class VwProviderLogo {
    public providerId: number = 0;
    public logoUrl: string = '';
    public googleMapOverwrite: string = '';

    constructor(init? : Partial<VwProviderLogo>) {
        
        Object.assign(this, init);
    }
}

