import { createSelector, Select, Selector } from '@ngxs/store';
import { ProgramState } from './program.state';
import { Constants} from '@libs/common/constants';
import { ProgramStateModel } from './program-state.model';
import { ProviderState, ProviderStateModel } from '@libs/common/store/provider';
import {
  ProgramSummaryDto,
  PostalCodeDto,
  LookupDto,
  PsiSpecializationCountByCategoryDto,
  ProgramDto,
  ProgramCostDto,
  ProgramCredentialDto,
  ProgramTypeDto,
  SpecializationDto,
} from '@libs/common/models';

export class ProgramSelectors {
  @Selector([ProgramState])
	static isInitialized(state: ProgramStateModel): any {
		const keys = Object.keys(state.programs);
		return keys.length > 0;
	}

  @Selector([ProgramState])
  static programs(state: ProgramStateModel): ProgramDto[] {
    return state.programs;
  }

  @Selector([ProgramState])
  static version(state: ProgramStateModel): string {
    return state.version;
  }

  @Selector([ProgramState])
  static getSelectedProgram(
    state: ProgramStateModel
  ): ProgramSummaryDto{
    return state.programSummaries.find((q) => q.programId === state.searchFilters.programId);
  }

  static getProgramSpecialization(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>
      state.programSpecializations.find((q) => q.programId === id)
    );
  }

  static getProgramCredential(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>
      state.programCredentials.find((q) => q.programCredentialId === id)
    );
  }
  
  static getProgramCost(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>
      state.programCosts.find((q) => q.programId === id)
    );
  }

  static getProgramType(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>
      state.programTypes.find((q) => q.programTypeId === id)
    );
  }

  static getProgramCategoryCount(cipSubSeriesCode: string) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>
      state.programCategoryCounts.find(
        (q) => q.cipSubSeriesCode === cipSubSeriesCode
      )
    );
  }

  static getCategoryPrograms(cipSubSeriesCode: string) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>
      state.programSpecializations.filter(
        (q) => q.cipSubSeriesCode === cipSubSeriesCode
      )
    );
  }

  @Selector([ProgramState])
  static getProgramSpecializations(
    state: ProgramStateModel
  ): SpecializationDto[] {
    return state.programSpecializations;
  }

  @Selector([ProgramState])
  static getProgramCosts(state: ProgramStateModel): ProgramCostDto[] {
    return state.programCosts;
  }

  @Selector([ProgramState])
  static getProgramTypes(state: ProgramStateModel): ProgramTypeDto[] {
    return state.programTypes;
  }

  @Selector([ProgramState])
  static getSelectedProviders(state: ProgramStateModel): number[] {
    return state.searchFilters.providerIds;
  }

  @Selector([ProgramState])
  static getSelectedCredentials(state: ProgramStateModel): number[] {
    return state.searchFilters.credentialIds;
  }

  @Selector([ProgramState])
  static getSelectedPostalCode(state: ProgramStateModel): string {
    return state.searchFilters.postalCode;
  }

  @Selector([ProgramState])
  static getPostalCodes(state: ProgramStateModel): PostalCodeDto[] {
    return state.postalCodes;
  }

  @Selector([ProgramState])
  static getSelectedCipSubSeriesCode(state: ProgramStateModel): string {
    return state.searchFilters.cipSubSeriesCode;
  }

  @Selector([ProgramState])
  static getSelectedSortOrder(state: ProgramStateModel): string {
    return state.searchFilters.sort;
  }

  @Selector([ProgramState])
  static getSelectedLocation(state:ProgramStateModel): string {
    return state.searchFilters.locationName;
  }

  @Selector([ProgramState])
  static getProgramCategoryCounts(
    state: ProgramStateModel
  ): PsiSpecializationCountByCategoryDto[] {
    return state.programCategoryCounts;
  }

  static getProviderPrograms(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>
      state.programs.filter((q) => q.providerId === id)
    );
  }

  //TODO: Move this somewhere else (Lookup ?)
  @Selector([ProgramState, ProviderState])
  static getProvidersAndCips( state: ProgramStateModel, providerState: ProviderStateModel) {
      const providers = providerState.programProviders;
      const cips = state.programCategoryCounts;
  
      var items = new Array<LookupDto>();
  
      if (providers && cips) {
        items = providers.map(
          (p) =>
            <LookupDto>{
              name: p.providerName,
              code: p.providerId.toString(),
              type: 'provider',
            }
        );
        var tmp = cips.map(
          (c) =>
            <LookupDto>{ name: c.cipSubSeries, code: c.cipSubSeriesCode, type: 'cips' }
        );
        items = items.concat(tmp);        
      }
      
      items = items.sort((a,b)=>{
        if (a.name < b.name) {
          return -1
        }
        if (b.name < a.name) {
          return 1
        }
        return 0
      });

      return items;
  }

  @Selector([ProgramState])
  static getProgramCredentials(
    state: ProgramStateModel
  ): ProgramCredentialDto[] {
    return state.programCredentials;
  }

  static getSpecializationCostForProgram(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>
      state.specializationCosts.filter((q) => q.programId === id)
    );
  }

  static getSpecializationCostsForProvider(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>
      state.specializationCosts.filter((q) => q.providerId === id)
    );
  }

  // Program Filtering
  @Selector([ProgramState])
  static getFilteredPrograms(
    state: ProgramStateModel,
  ): ProgramSummaryDto[] {
    var results: ProgramSummaryDto[] = state.programSummaries;


    //Apply provider filtering
    if (
      state.searchFilters.providerIds &&
      state.searchFilters.providerIds.length > 0
    ) {
      results = results.filter((f) =>
        state.searchFilters.providerIds.includes(f.providerId)
      );
    }

    //Apply CipSubCode filtering
    if (state.searchFilters.cipSubSeriesCode) {
      var programIds = state.programSpecializations
        .filter(
          (pc) =>
            pc.cipSubSeriesCode === state.searchFilters.cipSubSeriesCode
        )
        .map((pc) => pc.programId);
      results = results.filter((f) => programIds.includes(f.programId));
    }


   //Apply Keyword filtering
   if (state.searchFilters.keywords){
      results = results.filter(
        (f) => f.programName.includes(state.searchFilters.keywords)
      );
  }

    //Apply Credential filtering
    if (
      state.searchFilters.credentialIds &&
      state.searchFilters.credentialIds.length > 0
    ) {
      results = results.filter((f) =>
        state.searchFilters.credentialIds.includes(f.programCredentialId)
      );
    }

    //Apply Program Type filtering
    if (
      state.searchFilters.programTypeIds &&
      state.searchFilters.programTypeIds.length > 0
    ) {
      results = results.filter((f) =>
        state.searchFilters.programTypeIds.includes(f.programTypeId)
      );
    }

    //Apply distance filtering
    if (
      state.searchFilters.distanceInKm &&
      state.searchFilters.distanceInKm > 0
    ) {
      results = results.filter((f) =>
        f.providerDistance <= state.searchFilters.distanceInKm
      );
    }

    //Determine Sort
    var sortMethod = this.sortByNameAsc;
    switch (state.searchFilters.sort) {
      case Constants.ProgramSortOptions.SortProgramNameDesc: {
        sortMethod = this.sortByNameDesc;
        break;
      }
      case Constants.ProgramSortOptions.SortProgramDistanceAsc:{
        sortMethod = this.sortByDistanceClosest;
        break;
      }
      case Constants.ProgramSortOptions.SortProgramDistanceDesc:{
        sortMethod = this.sortByDistanceFurthest;
        break;
      }
      case Constants.ProgramSortOptions.SortProgramEstimatedCostAsc:{
        sortMethod = this.sortByEstimatedCostAsc;
        break;
      }
      case Constants.ProgramSortOptions.SortProgramEstimatedCostDesc:{
        sortMethod = this.sortByEstimatedCostDesc;
        break;
      }
      case Constants.ProgramSortOptions.SortProgramYearlyCostAsc:{
        sortMethod = this.sortByFirstYearCostAsc;
        break;
      }
      case Constants.ProgramSortOptions.SortProgramYearlyCostDesc:{
        sortMethod = this.sortByFirstYearCostDesc;
        break;
      }
      case Constants.ProgramSortOptions.SortProgramEstimatedMedianIncomeAsc:{
        sortMethod = this.sortByMedianIncomeAsc;
        break;
      }
      case Constants.ProgramSortOptions.SortProgramEstimatedMedianIncomeDesc:{
        sortMethod = this.sortByMedianIncomeDesc;
        break;
      }
      case Constants.ProgramSortOptions.SortProgramEmploymentRateAsc: {
        sortMethod = this.sortByEmploymentRateAsc
        break;
      }
      case Constants.ProgramSortOptions.SortProgramEmploymentRateDesc: {
        sortMethod = this.sortByEmploymentRateDesc
        break;
      }
      default: {
        sortMethod = this.sortByNameAsc;
        break;
      }
    }

    //Perform Sort
    results = results.sort((item1: ProgramSummaryDto, item2: ProgramSummaryDto) => {
      return sortMethod(item1, item2);
    });

    if (results.length > 200) {
      results = results.slice(0, 200);
    }

    return results;
  }

  //TODO: Move these somewhere more appropriate.
  public static sortByNameAsc(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.programName > item2.programName) {
      return 1;
    }
    if (item1.programName < item2.programName) {
      return -1;
    }
    return 0;
  }

  public static sortByNameDesc(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.programName > item2.programName) {
      return -1;
    }
    if (item1.programName < item2.programName) {
      return 1;
    }
    return 0;
  }

  public static sortByDistanceClosest(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.providerDistance > item2.providerDistance) {
      return 1;
    }
    if (item1.providerDistance < item2.providerDistance) {
      return -1;
    }
    return 0;
  }

  public static sortByDistanceFurthest(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.providerDistance < item2.providerDistance) {
      return 1;
    }
    if (item1.providerDistance > item2.providerDistance) {
      return -1;
    }
    return 0;
  }

  public static sortByEstimatedCostAsc(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.estimatedTotalCost > item2.estimatedTotalCost) {
      return 1;
    }
    if (item1.estimatedTotalCost < item2.estimatedTotalCost) {
      return -1;
    }
    return 0;
  }

  public static sortByEstimatedCostDesc(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.estimatedTotalCost < item2.estimatedTotalCost) {
      return 1;
    }
    if (item1.estimatedTotalCost > item2.estimatedTotalCost) {
      return -1;
    }
    return 0;
  }

  public static sortByFirstYearCostAsc(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.firstYearCost > item2.firstYearCost) {
      return 1;
    }
    if (item1.firstYearCost < item2.firstYearCost) {
      return -1;
    }
    return 0;
  }

  public static sortByFirstYearCostDesc(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.firstYearCost < item2.firstYearCost) {
      return 1;
    }
    if (item1.firstYearCost > item2.firstYearCost) {
      return -1;
    }
    return 0;
  }

  public static sortByMedianIncomeAsc(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.medianIncome > item2.medianIncome) {
      return 1;
    }
    if (item1.medianIncome < item2.medianIncome) {
      return -1;
    }
    return 0;
  }

  public static sortByMedianIncomeDesc(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.medianIncome < item2.medianIncome) {
      return 1;
    }
    if (item1.medianIncome > item2.medianIncome) {
      return -1;
    }
    return 0;
  }

  public static sortByEmploymentRateAsc(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.employmentRate > item2.employmentRate) {
      return 1;
    }
    if (item1.employmentRate < item2.employmentRate) {
      return -1;
    }
    return 0;
  }

  public static sortByEmploymentRateDesc(item1: ProgramSummaryDto, item2: ProgramSummaryDto): number {
    if (item1.employmentRate < item2.employmentRate) {
      return 1;
    }
    if (item1.employmentRate > item2.employmentRate) {
      return -1;
    }
    return 0;
  }
}
