


export class ProviderLogoDto {
    public providerId: number = 0;
    public logoUrl: string = '';
    public googleMapOverwrite: string = '';

    constructor(init? : Partial<ProviderLogoDto>) {
        
        Object.assign(this, init);
    }
}

