


export class ProgramCredentialDto {
    public programCredentialId: number = 0;
    public programCredential: string = '';
    public listSequence: number;

    constructor(init? : Partial<ProgramCredentialDto>) {
        
        Object.assign(this, init);
    }
}

