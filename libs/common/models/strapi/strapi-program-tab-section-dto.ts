import { Constants } from '@libs/common/constants'

export class StrapiProgramTabSectionDto {
    public id: number = 0;
    public title: string;
    public titleTarget: string;
    public subTitle: string;
    public content: string;
    public value: any;
    public sort: number;
    public type: Constants.Strapi.SectionTypes;
    public subType: string;
    public listItems: string[];
    public footer: string;
    
    // Unnecessary ?
    public published_at: any;
    public created_at: any;
    public updated_at: any;

    constructor(init? : Partial<StrapiProgramTabSectionDto>) {
        
        Object.assign(this, init);
    }
}

