import { createSelector, Selector } from '@ngxs/store';
import { ProgramState } from './program.state';
import { ProgramStateModel } from './program-state.model';
import {
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
  static getProgramSpecializations(state: ProgramStateModel): VwSpecialization[] {
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

  @Selector([ProgramState])
  static getProgramCredentials(state: ProgramStateModel): VwProgramCredential[] {
    return state.programCredentials;
  }

  // Program Filtering
  @Selector([ProgramState])
  static getFilteredPrograms(state: ProgramStateModel): VwProgram[] {
    var results = state.programs;

    //Apply provider filtering
    if (state.programSearchFilter_ProviderIds && state.programSearchFilter_ProviderIds.length > 0) {
      results = results.filter(
        (f) => state.programSearchFilter_ProviderIds.includes(f.providerId)
      );
    }

    //Apply CipSubCode filtering
    if (state.programSearchFilter_CipSubSeriesCode){
      var programIds = state.programSpecializations.filter(pc=>pc.cipSubSeriesCode===state.programSearchFilter_CipSubSeriesCode).map(pc=>pc.programId);
      results = results.filter((f) => programIds.includes(f.programId));
    }

    //Apply distance filtering
    // if (state.programSearchFilter_PostalCode) {
    //   //Quick and dirty, if the postal code has the same first 3 characters, it's "close"
    //   var providerIds = state.getroviderLocations.filter(pl=>pl.postalZipCode.startsWith(state.programSearchFilter_PostalCode.slice(0,3))).map(pl=>pl.providerId)
    //   results = results.filter((f)=> providerIds.includes(f.providerId));
    // }

    //Apply Credential filtering
    if (state.programSearchFilter_CredentialIds && state.programSearchFilter_CredentialIds.length > 0 ) {
      results = results.filter(f=> state.programSearchFilter_CredentialIds.includes(f.programCredentialId));
    }

    //Apply Program Type filtering
    if (state.programSearchFilter_ProgramTypeIds && state.programSearchFilter_ProgramTypeIds.length > 0 ) {
      results = results.filter(f=> state.programSearchFilter_ProgramTypeIds.includes(f.programTypeId));
    }

    if (results.length > 20) {
      results = results.slice(0,20);
    }

    return results;
  }
}
