

import { Profile } from './profile';

export class AutoMapperProfile extends Profile {

    constructor(init? : Partial<AutoMapperProfile>) {
        super();
        Object.assign(this, init);
    }
}

