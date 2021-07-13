import { StrapiProgramTabDto } from "./strapi-program-tab-dto";

export class StrapiProgramDto {
    public id: number = 0;
    public program_id: number;
    public tabs: StrapiProgramTabDto[] = [];  
    
    constructor(init? : Partial<StrapiProgramDto>) {
        
        Object.assign(this, init);
    }
}

