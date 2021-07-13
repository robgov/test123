


export class VersionInfoDto {
    public version: string = '';
    public environment: string = '';

    constructor(init? : Partial<VersionInfoDto>) {
        
        Object.assign(this, init);
    }
}

