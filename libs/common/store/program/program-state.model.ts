import {
  VwPmpPsiprogramCountByCategory,
  VwProgram,
  VwProgramCost,
  VwSpecialization,
  VwProgramCredential,
  VwProgramType,
  VwSpecializationCost,
  VwAbpostalCode,
} from '@libs/common/models';

export class ProgramStateModel {
  programs: VwProgram[];
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
  programSearchFilter_CredentialIds: number[];
  programSearchFilter_ProgramTypeIds: number[];
  programSearchFilter_Sort: string = "1";
}
