


export class VwLocationPublication {
    public locationPublicationId: number = 0;
    public locationPublicationStatus: string = '';
    public publishOnWebsiteFlag: boolean;
    public subRegion: string = '';
    public publicationDetailStatus: string = '';
    public locationId: number;
    public businessStartDate: Date;
    public businessEndDate: Date;

    constructor(init? : Partial<VwLocationPublication>) {
        
        Object.assign(this, init);
    }
}

