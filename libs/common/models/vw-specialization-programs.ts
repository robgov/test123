

import { VwProgram } from './vw-program';

export class VwSpecializationPrograms {
    public cipSubSeriesCode: string = '';
    public programs: VwProgram[] = [];

    constructor(init? : Partial<VwSpecializationPrograms>) {
        
        Object.assign(this, init);
    }
}

