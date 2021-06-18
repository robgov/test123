import {
  VwPmpPsiprogramCountByCategory,
  VwProgram,
  VwProgramCost,
  VwSpecialization,
  VwProgramCredential,
  VwProgramType,
} from '@libs/common/models';

export class ProgramStateModel {
  programs: VwProgram[];
  programSpecializations: VwSpecialization[];
  programCosts: VwProgramCost[];
  programTypes: VwProgramType[];
  programCredentials: VwProgramCredential[];
  programCategoryCounts: VwPmpPsiprogramCountByCategory[];

  // Program Search Filters
  programSearchFilter_ProviderIds: number[];
  programSearchFilter_CipSubSeriesCode: string;
  programSearchFilter_CategoryProgramIds: number[];
  programSearchFilter_PostalCode: string;
  programSearchFilter_CredentialIds: number[];
  programSearchFilter_ProgramTypeIds: number[];
}
