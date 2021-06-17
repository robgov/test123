import { VwPmpPsiprogramCountByCategory, VwProgram, VwProgramCost, VwProviderAddress,VwAlbertaPsiprovider, VwProviderLogo, VwSpecialization, VwProgramCredential } from '@libs/common/models';

export class ProgramStateModel {
    programs: VwProgram[];
	programSpecializations: VwSpecialization[];
	programCosts: VwProgramCost[];
	programCredentials: VwProgramCredential[];
	programCategoryCounts: VwPmpPsiprogramCountByCategory[];

	programProviders: VwAlbertaPsiprovider[];
	providerLocations: VwProviderAddress[];
	providerLogos: VwProviderLogo[];

	programSearchFilter_ProviderIds: number[];
	programSearchFilter_CipSubSeriesCode: string;
	programSearchFilter_CategoryProgramIds: number[];
	programSearchFilter_PostalCode:string;
	programSearchFilter_CredentialIds: number[];	
}

