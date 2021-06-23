import { Action, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { ProgramStateModel } from './program-state.model';

import { ProgramActions } from './program.actions';
import {
  ProgramService,
  ProviderLogoService,
  SpecializationService,
  ProgramCostService,
  AlbertaPSIProviderService,
  ProgramCredentialService,
  ProgramTypeService,
} from '@libs/common/services';
import {
  VwProgram,
  ProgramsRequest,
  VwSpecialization,
  VwProgramCost,
  ProgramCostsRequest,
  VwPmpPsiprogramCountByCategory,
  VwProgramCredential,
  VwProgramType,
} from '@libs/common/models';
import { Injectable } from '@angular/core';
import { AppAction } from '@libs/common/store/common/app.actions';

const initialState = new ProgramStateModel();

@State<ProgramStateModel>({
  name: 'program',
  defaults: initialState,
})
@Injectable()
export class ProgramState {
  constructor(
    private programService: ProgramService,
    private specializationService: SpecializationService,
    private programCostService: ProgramCostService,
    private programCredentialService: ProgramCredentialService,
    private programTypeService: ProgramTypeService
  ) {}

  @Action(AppAction.Start)
  onStart(ctx: StateContext<ProgramStateModel>, action: AppAction.Start) {
    console.log('initializing...');
    ctx.dispatch([
      new ProgramActions.GetProgramCategoryCounts(),
      new ProgramActions.GetProgramCosts(),
      new ProgramActions.GetProgramCredentials(),
      new ProgramActions.GetPrograms(),
      new ProgramActions.GetProgramSpecializations(),
      new ProgramActions.GetProgramTypes()
    ]);
  }

  @Action(ProgramActions.GetPrograms)
  onGetPrograms(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetPrograms
  ) {
    return this.programService.getPrograms(new ProgramsRequest({})).pipe(
      tap((data: VwProgram[]) => {
        ctx.patchState({
          programs: data,
        });
      })
    );
  }

  @Action(ProgramActions.GetProgramSpecializations)
  onGetProgramSpecializations(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetProgramSpecializations
  ) {
    return this.specializationService.getSpecializations().pipe(
      tap((data: VwSpecialization[]) => {
        ctx.patchState({
          programSpecializations: data,
        });
      })
    );
  }

  @Action(ProgramActions.GetProgramCosts)
  onGetProgramCosts(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetProgramCosts
  ) {
    return this.programCostService
      .getProgramCosts(new ProgramCostsRequest())
      .pipe(
        tap((data: VwProgramCost[]) => {
          ctx.patchState({
            programCosts: data,
          });
        })
      );
  }

  @Action(ProgramActions.GetProgramTypes)
  onGetProgramTypes(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetProgramTypes
  ){
    return this.programTypeService
    .getProgramTypes()
    .pipe(
      tap((data: VwProgramType[]) => {
        ctx.patchState({
          programTypes: data,
        });
      })
    );
  }

  @Action(ProgramActions.GetProgramCategoryCounts)
  onGetProgramCategoryCounts(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetProgramCategoryCounts
  ) {
    return this.programService.getProgramCountByCategory().pipe(
      tap((data: VwPmpPsiprogramCountByCategory[]) => {
        ctx.patchState({
          programCategoryCounts: data,
        });
      })
    );
  }

  @Action(ProgramActions.GetProgramCredentials)
  onGetProgramCredentials(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetProgramCredentials
  ) {
    return this.programCredentialService.getProgramCredentials().pipe(
      tap((data: VwProgramCredential[]) => {
        ctx.patchState({
          programCredentials: data,
        });
      })
    );
  }

  //Filtering
  @Action(ProgramActions.SetProgramSearchProviderFilter)
  onSetProgramSearchProviderFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchProviderFilter
  ) {
    ctx.patchState({
      programSearchFilter_ProviderIds: action.providerIds,
    });
  }

  @Action(ProgramActions.SetProgramSearchCategoryFilter)
  onSetProgramSearchCategoryFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchCategoryFilter
  ) {

    ctx.patchState({
      programSearchFilter_CipSubSeriesCode: action.categoryCode
    });
  }

  @Action(ProgramActions.SetProgramSearchKeywordFilter)
  onSetProgramSearchKeywordFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchKeywordFilter
  ) {
    ctx.patchState({
      programSearchFilter_Keywords: action.keywords
    });
  }

  //

  @Action(ProgramActions.SetProgramSearchCredentialFilter)
  onSetProgramSearchCredentialFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchCredentialFilter
  ) {

    ctx.patchState({
      programSearchFilter_CredentialIds: action.credentialIds
    });
  }

  @Action(ProgramActions.SetProgramSearchProgramTypeFilter)
  onSetProgramSearchProgramTypeFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchProgramTypeFilter
  ) {
    ctx.patchState({
      programSearchFilter_ProgramTypeIds: action.programTypeIds
    });
  }
}
