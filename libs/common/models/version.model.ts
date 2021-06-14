


export class VersionModel {
    public version: string = '';
    public buildDate: string;
    public environment: string = '';

    constructor(init? : Partial<VersionModel>) {
        
        Object.assign(this, init);
    }
}
