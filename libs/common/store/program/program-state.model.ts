import {
  VwPmpPsiprogramCountByCategory,
  VwProgram,
  VwProgramCost,
  VwSpecialization,
  VwProgramCredential,
  VwProgramType,
  VwSpecializationCost,
  VwAbpostalCode,
  ProgramSummaryDto,
} from '@libs/common/models';

export class ProgramStateModel {
  programs: VwProgram[];
  programSummaries: ProgramSummaryDto[];
  programSpecializations: VwSpecialization[];
  programCosts: VwProgramCost[];
  specializationCosts: VwSpecializationCost[];
  programTypes: VwProgramType[];
  programCredentials: VwProgramCredential[];
  programCategoryCounts: VwPmpPsiprogramCountByCategory[];
  postalCodes: VwAbpostalCode[];

  // Program Search Filters
  programSearchFilter_ProviderIds: number[];
  programSearchFilter_CipSubSeriesCode: string;
  programSearchFilter_CategoryProgramIds: number[];
  programSearchFilter_PostalCode: string;
  programSearchFilter_DistanceInKm: number=0;
  programSearchFilter_CredentialIds: number[];
  programSearchFilter_ProgramTypeIds: number[];
  programSearchFilter_Keywords: string;
  programSearchFilter_Sort: string = "1";
}
