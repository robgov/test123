import { createSelector, Selector } from '@ngxs/store';
import { ProgramState } from './program.state';
import { ProgramStateModel } from './program-state.model';
import { VwPmpPsiprogramCountByCategory, VwProgram, VwProgramCost, VwProvider, VwProviderLogo, VwSpecialization } from '@libs/common/models';

export class ProgramSelectors {
  @Selector([ProgramState])
  static programs(state: ProgramStateModel): VwProgram[] {
    return state.programs;
  }

  static getProgramSpecialization(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>  state.programSpecializations.find(q => q.programId === id));
  }

  static getProgramCost(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>  state.programCosts.find(q => q.programId === id));
  }

  static getProgramCategoryCount(cipSubSeriesCode: string) {
    return createSelector([ProgramState], (state:ProgramStateModel) => state.programCategoryCounts.find(q=>q.cipSubSeriesCode === cipSubSeriesCode));
  }

  static getCategoryPrograms(cipSubSeriesCode: string) {
    return createSelector([ProgramState], (state: ProgramStateModel) => state.programSpecializations.filter(q=>q.cipSubSeriesCode === cipSubSeriesCode));
  }

  static getProgramSearchFilters(){
    return createSelector([ProgramState], (state:ProgramStateModel) => state.programSearchFilters);
  }

  @Selector([ProgramState])
  static programSpecializations(state: ProgramStateModel): VwSpecialization[] {
    return state.programSpecializations;
  }

  @Selector([ProgramState])
  static programCosts(state: ProgramStateModel): VwProgramCost[] {
    return state.programCosts;
  }

  @Selector([ProgramState])
  static programCategoryCounts(state: ProgramStateModel): VwPmpPsiprogramCountByCategory[] {
    return state.programCategoryCounts;
  }

  // Provider Selectors
  static getProvider(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel) =>  state.programProviders.find(q => q.providerId === id));
  }

  static getProviderLogo(id: number){
    return createSelector([ProgramState], (state: ProgramStateModel) =>  state.providerLogos.find(q => q.providerId === id));
  }

  static getProviderPrograms(id: number) {
    return createSelector([ProgramState], (state: ProgramStateModel)=> state.programs.filter(q=>q.providerId===id));
  }

  @Selector([ProgramState])
  static programProviders(state: ProgramStateModel): VwProvider[] {
    return state.programProviders;
  }

  @Selector([ProgramState])
  static programProviderLogos(state: ProgramStateModel): VwProviderLogo[] {
    return state.providerLogos;
  }

  
}
