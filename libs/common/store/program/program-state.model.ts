import {
  PsiSpecializationCountByCategoryDto,
  ProgramDto,
  ProgramCostDto,
  SpecializationDto,
  ProgramCredentialDto,
  ProgramTypeDto,
  SpecializationCostDto,
  PostalCodeDto,
  ProgramSummaryDto,
} from '@libs/common/models';

export class ProgramStateModel {
  // Api Keys, this probably shouldn't live here
  googleApiKey: string;

  programs: ProgramDto[];
  programSummaries: ProgramSummaryDto[];
  programSpecializations: SpecializationDto[];
  programCosts: ProgramCostDto[];
  specializationCosts: SpecializationCostDto[];
  programTypes: ProgramTypeDto[];
  programCredentials: ProgramCredentialDto[];
  programCategoryCounts: PsiSpecializationCountByCategoryDto[];
  postalCodes: PostalCodeDto[];

  // Program Search Filters
  programSearchFilter_ProviderIds: number[];
  programSearchFilter_CipSubSeriesCode: string;
  programSearchFilter_CategoryProgramIds: number[];
  programSearchFilter_LocationName: string;
  programSearchFilter_PostalCode: string;
  programSearchFilter_Latitude: number;
  programSearchFilter_Longitude: number;
  programSearchFilter_DistanceInKm: number = 0;
  programSearchFilter_CredentialIds: number[];
  programSearchFilter_ProgramTypeIds: number[];
  programSearchFilter_Keywords: string;
  programSearchFilter_Sort: string = '1';
}
