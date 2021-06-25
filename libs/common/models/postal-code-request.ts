


export class PostalCodeRequest {
    public postalCode: string = '';

    constructor(init? : Partial<PostalCodeRequest>) {
        
        Object.assign(this, init);
    }
}

