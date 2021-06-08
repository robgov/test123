


export class VwProgramCredential {
    public programCredentialId: number = 0;
    public programCredential: string = '';
    public listSequence: number;

    constructor(init? : Partial<VwProgramCredential>) {
        
        Object.assign(this, init);
    }
}

