


export class VwProgramPublication {
    public programPublicationId: number = 0;
    public programAdvertisedName: string = '';
    public programPublicationStatus: string = '';
    public publishFundingFlag: boolean;
    public publishOnWebsiteFlag: boolean;
    public programId: number;

    constructor(init? : Partial<VwProgramPublication>) {
        
        Object.assign(this, init);
    }
}

