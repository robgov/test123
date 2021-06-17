import { Action, NgxsOnInit, State, StateContext, Store } from '@ngxs/store';
import { map, tap } from 'rxjs/operators';

import { ProgramStateModel } from './program-state.model';
import { ProgramActions } from './program.actions';
import {
  ProgramService,
  ProviderLogoService,
  SpecializationService,
  ProgramCostService,
  AlbertaPSIProviderService,
  ProgramCredentialService,
} from '@libs/common/services';
import {
  VwProgram,
  ProgramsRequest,
  VwAlbertaPsiprovider,
  VwProviderLogo,
  VwSpecialization,
  VwProgramCost,
  ProgramCostsRequest,
  VwPmpPsiprogramCountByCategory,
  VwProgramCredential,
} from '@libs/common/models';
import { Injectable } from '@angular/core';
import { AppAction } from '@libs/common/store/common/app.actions';
import { ProgramSelectors } from './program.selectors';

const initialState = new ProgramStateModel();

@State<ProgramStateModel>({
  name: 'program',
  defaults: initialState,
})
@Injectable()
export class ProgramState {
  constructor(
    private store: Store,
    private programService: ProgramService,
    private albertaPSIProviderService: AlbertaPSIProviderService,
    private providerLogoService: ProviderLogoService,
    private specializationService: SpecializationService,
    private programCostService: ProgramCostService,
    private programCredentialService: ProgramCredentialService
  ) {}

  @Action(AppAction.Start)
  onStart(ctx: StateContext<ProgramStateModel>, action: AppAction.Start) {
    console.log('initializing...');
    ctx.dispatch([
      new ProgramActions.GetProgramCategoryCounts(),
      new ProgramActions.GetProgramCosts(),
      new ProgramActions.GetProgramCredentials(),
      new ProgramActions.GetProgramProviders(),
      new ProgramActions.GetProgramProviderLogos(),
      new ProgramActions.GetPrograms(),
      new ProgramActions.GetProgramSpecializations(),
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

  @Action(ProgramActions.GetProgramProviders)
  onGetProgramProviders(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetProgramProviders
  ) {
    return this.albertaPSIProviderService.getAlbertaPsiProviders().pipe(
      tap((data: VwAlbertaPsiprovider[]) => {
        ctx.patchState({
          programProviders: data,
        });
      })
    );
  }

  @Action(ProgramActions.GetProgramProviderLogos)
  onGetProgramProviderLogos(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetProgramProviderLogos
  ) {
    return this.providerLogoService.getProviderLogos().pipe(
      tap((data: VwProviderLogo[]) => {
        ctx.patchState({
          providerLogos: data,
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
      programSearchFilter_ProviderIds: action.providerId,
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

  @Action(ProgramActions.SetProgramSearchCredentialFilter)
  onSetProgramSearchCredentialFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchCredentialFilter
  ) {

    ctx.patchState({
      programSearchFilter_CredentialIds: action.credentialId
    });
  }
}
