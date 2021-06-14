import { VwPmpPsiprogramCountByCategory, VwProgram, VwProgramCost, VwProvider,VwAlbertaPsiprovider, VwProviderLogo, VwSpecialization } from '@libs/common/models';

export class ProgramStateModel {
    programs: VwProgram[];
	programSpecializations: VwSpecialization[];
	programCosts: VwProgramCost[];
	programCategoryCounts: VwPmpPsiprogramCountByCategory[];

	programProviders: VwAlbertaPsiprovider[];
	providerLogos: VwProviderLogo[];

	programSearchFilters;
	// auth: AuthenticatedModel = null;
	// accessRequests: AllAccessInfoModel = new AllAccessInfoModel();
	// errors: PropertyErrorModel[] = [];
	// isAuthInitialized = false;
	// isAuthorized = false;
	// redirectUrl = '';
	// status = new LoginStatusModel();
	// forms: {
	// 	accessRequest: {
	// 		model: RequestAccessModel;
	// 		dirty: false;
	// 		status: '';
	// 		errors: any;
	// 	};
	// 	selectJudicialCentre: {
	// 		model: PreferenceModel;
	// 		dirty: false;
	// 		status: '';
	// 		errors: any;
	// 	};
	// };
}

