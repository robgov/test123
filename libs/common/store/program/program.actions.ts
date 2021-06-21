export namespace ProgramActions {
  export class GetPrograms {
    static readonly type = '[Aed Programs] Get Programs';
  }

  export class GetProgramSpecializations {
    static readonly type = '[Aed Program] Get Program Specializations';
  }

  export class GetProgramCosts {
    static readonly type = '[Aed Program] Get Program Costs';
  }

  export class GetSpecializationCostsForProvider {
    static readonly type = "[ Aed Programs] Get Specialization Costs For Provider"
    constructor (public providerId: number) {}
  }

  export class GetSpecializationCostForProgram {
    static readonly type = "[ Aed Programs] Get Specialization Cost For Program"
    constructor (public programId: number) {}
  }

  export class GetProgramTypes {
    static readonly type = '[Aed Program] Get Program Types';
  }

  export class GetProgramCategoryCounts {
    static readonly type = '[Aed Program] Get Program Category Counts';
  }

  export class GetProgramCredentials {
    static readonly type = '[Aed Program] Get Program Credentials';
  }

  // Program Search / Filters
  export class GetFilteredPrograms {
    static readonly type = '[Aed Program] Get Filtered Programs';
  }

  export class SetProgramSearchProviderFilter {
    static readonly type = '[Aed Program] Filter Program Search By Providers';
    constructor(public providerIds: number[]) {}
  }

  export class SetProgramSearchCategoryFilter {
    static readonly type =
      '[Aed Program] Filter Program Search By Categories';
    constructor(public categoryCode: string) {}
  }

  export class SetProgramSearchCredentialFilter {
    static readonly type =
      '[Aed Program] Filter Program Search By Credential';
    constructor(public credentialIds: number[]) {}
  }

  export class SetProgramSearchProgramTypeFilter {
    static readonly type =
      '[Aed Program] Filter Program Search By Program Type';
    constructor(public programTypeIds: number[]) {}
  }

  export class SetProgramSearchSortOrder {
    static readonly type =
      '[Aed Program] Filter Program Search By Program Type';
    constructor(public sortOrder: string) {}
  }

  export class ShowProgramSort {
		static readonly type = "[Aed Program] Show Program Sort";
	}

  export class CloseProgramSort {
    static readonly type = "[Aed Program] Close Program Sort";
  }

  export class ShowProgramFilter {
		static readonly type = "[Aed Program] Show Program Filter";
	}
  
  export class CloseProgramFilter {
    static readonly type = "[Aed Program] Close Program Filter";
  }
}
