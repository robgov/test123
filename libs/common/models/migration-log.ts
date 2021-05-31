


export class MigrationLog {
    public migrationId: string = '';
    public scriptChecksum: string = '';
    public scriptFilename: string = '';
    public completeDt: string = '';
    public appliedBy: string = '';
    public deployed: number = 0;
    public version: string = '';
    public packageVersion: string = '';
    public releaseVersion: string = '';
    public sequenceNo: number = 0;

    constructor(init? : Partial<MigrationLog>) {
        
        Object.assign(this, init);
    }
}

