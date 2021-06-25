


export class VwAbpostalCode {
    public postalCode: string = '';
    public latitude: number;
    public longitude: number;

    constructor(init? : Partial<VwAbpostalCode>) {
        
        Object.assign(this, init);
    }
}

