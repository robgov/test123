export namespace ProgramActions {
  export class GetPrograms {
    static readonly type = '[Aed Programs] Get Programs';
  }

  export class GetProgramSpecializations {
    static readonly type = '[Aed Providers] Get Program Specializations';
  }

  export class GetProgramCosts {
    static readonly type = '[Aed Providers] Get Program Costs';
  }

  export class GetProgramTypes {
    static readonly type = '[Aed Providers] Get Program Types';
  }

  export class GetProgramCategoryCounts {
    static readonly type = '[Aed Providers] Get Program Category Counts';
  }

  export class GetProgramCredentials {
    static readonly type = '[Aed Providers] Get Program Credentials';
  }

  // Program Search / Filters
  export class GetFilteredPrograms {
    static readonly type = '[Aed Providers] Get Filtered Programs';
  }

  export class SetProgramSearchProviderFilter {
    static readonly type = '[Aed Providers] Filter Program Search By Providers';
    constructor(public providerIds: number[]) {}
  }

  export class SetProgramSearchCategoryFilter {
    static readonly type =
      '[Aed Providers] Filter Program Search By Categories';
    constructor(public categoryCode: string) {}
  }

  export class SetProgramSearchCredentialFilter {
    static readonly type =
      '[Aed Providers] Filter Program Search By Credential';
    constructor(public credentialIds: number[]) {}
  }

  export class SetProgramSearchProgramTypeFilter {
    static readonly type =
      '[Aed Providers] Filter Program Search By Program Type';
    constructor(public programTypeIds: number[]) {}
  }
}
