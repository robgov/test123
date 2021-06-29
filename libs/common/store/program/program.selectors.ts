import { createSelector, Select, Selector } from '@ngxs/store';
import { ProgramState } from './program.state';
import { Constants} from '@libs/common/constants';
import { ProgramStateModel } from './program-state.model';
import { ProviderState, ProviderStateModel } from '@libs/common/store/provider';
import {
  ProgramSummaryDto,
  VwPmpLookup,
  VwPmpPsiprogramCountByCategory,
  VwProgram,
  VwProgramCost,
  VwProgramCredential,
  VwProgramType,
  VwSpecialization,
} from '@libs/common/models';

export class ProgramSelectors {
  @Selector([ProgramState])
  static programs(state: ProgramStateModel): VwProgram[] {
    return state.programs;
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
  ): VwSpecialization[] {
    return state.programSpecializations;
  }

  @Selector([ProgramState])
  static getProgramCosts(state: ProgramStateModel): VwProgramCost[] {
    return state.programCosts;
  }

  @Selector([ProgramState])
  static getProgramTypes(state: ProgramStateModel): VwProgramType[] {
    return state.programTypes;
  }

  @Selector([ProgramState])
  static getSelectedProviders(state: ProgramStateModel): number[] {
    return state.programSearchFilter_ProviderIds;
  }

  @Selector([ProgramState])
  static getSelectedCredentials(state: ProgramStateModel): number[] {
    return state.programSearchFilter_CredentialIds;
  }

  @Selector([ProgramState])
  static getSelectedPostalCode(state: ProgramStateModel): string {
    return state.programSearchFilter_PostalCode;
  }

  @Selector([ProgramState])
  static getSelectedCipSubSeriesCode(state: ProgramStateModel): string {
    return state.programSearchFilter_CipSubSeriesCode;
  }

  @Selector([ProgramState])
  static getSelectedSortOrder(state: ProgramStateModel): string {
    return state.programSearchFilter_Sort;
  }

  @Selector([ProgramState])
  static getSelectedLocation(state:ProgramStateModel): string {
    if (state.programSearchFilter_PostalCode) {
      return state.programSearchFilter_PostalCode;
    }
    if (state.programSearchFilter_Latitude != 0 && state.programSearchFilter_Longitude) {
      return state.programSearchFilter_Latitude + ", " + state.programSearchFilter_Longitude;
    }
    return "";
  }

  @Selector([ProgramState])
  static getProgramCategoryCounts(
    state: ProgramStateModel
  ): VwPmpPsiprogramCountByCategory[] {
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
  
      var items = new Array<VwPmpLookup>();
  
      if (providers && cips) {
        items = providers.map(
          (p) =>
            <VwPmpLookup>{
              name: p.providerName,
              code: p.providerId.toString(),
              type: 'provider',
            }
        );
        var tmp = cips.map(
          (c) =>
            <VwPmpLookup>{ name: c.cipSubSeries, code: c.cipSubSeriesCode, type: 'cips' }
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
  ): VwProgramCredential[] {
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
      state.programSearchFilter_ProviderIds &&
      state.programSearchFilter_ProviderIds.length > 0
    ) {
      results = results.filter((f) =>
        state.programSearchFilter_ProviderIds.includes(f.providerId)
      );
    }

    //Apply CipSubCode filtering
    if (state.programSearchFilter_CipSubSeriesCode) {
      var programIds = state.programSpecializations
        .filter(
          (pc) =>
            pc.cipSubSeriesCode === state.programSearchFilter_CipSubSeriesCode
        )
        .map((pc) => pc.programId);
      results = results.filter((f) => programIds.includes(f.programId));
    }


   //Apply Keyword filtering
   if (state.programSearchFilter_Keywords){
      results = results.filter(
        (f) => f.programName.includes(state.programSearchFilter_Keywords)
      );
  }

    //Apply Credential filtering
    if (
      state.programSearchFilter_CredentialIds &&
      state.programSearchFilter_CredentialIds.length > 0
    ) {
      results = results.filter((f) =>
        state.programSearchFilter_CredentialIds.includes(f.programCredentialId)
      );
    }

    //Apply Program Type filtering
    if (
      state.programSearchFilter_ProgramTypeIds &&
      state.programSearchFilter_ProgramTypeIds.length > 0
    ) {
      results = results.filter((f) =>
        state.programSearchFilter_ProgramTypeIds.includes(f.programTypeId)
      );
    }

    //Apply distance filtering
    if (
      state.programSearchFilter_DistanceInKm &&
      state.programSearchFilter_DistanceInKm > 0
    ) {
      results = results.filter((f) =>
        f.providerDistance <= state.programSearchFilter_DistanceInKm
      );
    }

    //Determine Sort
    var sortMethod = this.sortByNameAsc;
    switch (state.programSearchFilter_Sort) {
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

    if (results.length > 20) {
      results = results.slice(0, 20);
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
