


export class DataSet {
    public dataSetId: number = 0;
    public dataSetName: string = '';
    public dataSetDesciption: string = '';

    constructor(init? : Partial<DataSet>) {
        
        Object.assign(this, init);
    }
}

