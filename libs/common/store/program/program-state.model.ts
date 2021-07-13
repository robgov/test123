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
  // Things that don't belong in program state Start
  googleApiKey: string;
  version: string;
  // Things that don't belong in program state End

  programs: ProgramDto[];
  programSummaries: ProgramSummaryDto[];
  programSpecializations: SpecializationDto[];
  programCosts: ProgramCostDto[];
  specializationCosts: SpecializationCostDto[];
  programTypes: ProgramTypeDto[];
  programCredentials: ProgramCredentialDto[];
  programCategoryCounts: PsiSpecializationCountByCategoryDto[];
  postalCodes: PostalCodeDto[];

  searchFilters: {
    programId: number;
    providerIds: number[];
    cipSubSeriesCode: string;
    categoryProgramIds: number[];
    locationName: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    distanceInKm: number;
    credentialIds: number[];
    programTypeIds: number[];
    keywords: string;
    sort: string;  
  }
}
