


export class MigrationLogCurrent {
    public migrationId: string = '';
    public scriptChecksum: string = '';
    public scriptFilename: string = '';
    public completeDt: string = '';
    public appliedBy: string = '';
    public deployed: number = 0;

    constructor(init? : Partial<MigrationLogCurrent>) {
        
        Object.assign(this, init);
    }
}

