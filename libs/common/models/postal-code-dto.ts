


export class PostalCodeDto {
    public postalCode: string = '';
    public latitude: number;
    public longitude: number;

    constructor(init? : Partial<PostalCodeDto>) {
        
        Object.assign(this, init);
    }
}

