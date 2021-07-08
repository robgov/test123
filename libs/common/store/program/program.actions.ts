export namespace ProgramActions {
  export class SetGoogleApiKey{
    static readonly type = '[Aed Programs] Set Google Api Key';
    public constructor (public googleApiKey: string) {}
  }

  export class GetPrograms {
    static readonly type = '[Aed Programs] Get Programs';
  }

  export class ViewProgram {
    static readonly type = '[Aed Programs] View Program';
    
    constructor(public programId: number) {}
  }

  export class GetProgramSummaries {
    static readonly type = '[Aed Programs] Get Program Summaries';
  }

  export class GetProgramSpecializations {
    static readonly type = '[Aed Program] Get Program Specializations';
  }

  export class GetProgramCosts {
    static readonly type = '[Aed Program] Get Program Costs';
  }

  export class GetSpecializationCostsForProvider {
    static readonly type =
      '[ Aed Programs] Get Specialization Costs For Provider';
    constructor(public providerId: number) {}
  }

  export class GetSpecializationCostForProgram {
    static readonly type =
      '[ Aed Programs] Get Specialization Cost For Program';
    constructor(public programId: number) {}
  }

  export class GetProgramTypes {
    static readonly type = '[Aed Program] Get Program Types';
  }

  export class GetPostalCodes {
    static readonly type = '[Aed Program] Get Postal Codes';
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

  //A singular search/filter for a specific programs
  export class SetProgramIDSearchFilter {
    static readonly type = '[Aed Program] Filter Program Search By ID';
    constructor(public programId: number) {}
  }

  export class SetProgramSearchProviderFilter {
    static readonly type = '[Aed Program] Filter Program Search By Providers';
    constructor(public providerIds: number[]) {}
  }

  export class SetProgramSearchCategoryFilter {
    static readonly type = '[Aed Program] Filter Program Search By Categories';
    constructor(public categoryCode: string) {}
  }

  export class SetProgramSearchCredentialFilter {
    static readonly type = '[Aed Program] Filter Program Search By Credential';
    constructor(public credentialIds: number[]) {}
  }

  export class SetProgramSearchKeywordFilter {
    static readonly type = '[Aed Providers] Filter Program Search By Keywords';
    constructor(public keywords: string) {}
  }

  export class SetProgramSearchDistanceFilter {
    static readonly type = '[Aed Providers] Filter Program Search By Distance';
    constructor(public distance: number) {}
  }

  export class SetProgramSearchProgramTypeFilter {
    static readonly type =
      '[Aed Program] Filter Program Search By Program Type';
    constructor(public programTypeIds: number[]) {}
  }

  export class SetProgramSearchPostalCodeFilter {
    static readonly type = '[Aed Program] Filter Program Search By Postal Code';
    constructor(public postalCode: string) {}
  }

  export class SetProgramProviderDistances {
    static readonly type = '[Aed Program] Set Program Provider Distances';
  }

  export class ResetProgramProviderDistances {
    static readonly type = '[Aed Program] Reset Program Provider Distances';
  }

  export class SetProgramSearchUserLocationFilter {
    static readonly type = '[Aed Program] Set Program User Location';
    constructor(public latitude: number, public longitude: number) {}
  }

  //Sorting Stuff
  export class SetProgramSearchSortOrder {
    static readonly type =
      '[Aed Program] Filter Program Search By Program Type';
    constructor(public sortOrder: string) {}
  }

  //Menu action stuff, belongs somewhere else
  export class ShowProgramSort {
    static readonly type = '[Aed Program] Show Program Sort';
  }

  export class CloseSidebar {
    static readonly type = '[Aed Program] Close Sidebar';
  }

  export class ShowProgramFilter {
    static readonly type = '[Aed Program] Show Program Filter';
  }

  export class ShowMenu {
    static readonly type = '[Aed Program] Show Menu';
  }
}
