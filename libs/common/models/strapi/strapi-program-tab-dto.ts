import { StrapiProgramTabSectionDto } from '@libs/common/models';

export class StrapiProgramTabDto {
    public id: number = 0;
    public tabtitle: string;
    public sort: number;
    public sections: StrapiProgramTabSectionDto[];
    

    constructor(init? : Partial<StrapiProgramTabDto>) {
        
        Object.assign(this, init);
    }
}

