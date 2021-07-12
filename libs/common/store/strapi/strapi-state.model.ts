import { StrapiProgramDto, StrapiProgramTabDto } from "@libs/common/models";

export class StrapiStateModel {
    baseUrl: string = "";
    programData: any[];
    loanData: any[];
    programDetailData: StrapiProgramDto[];
}