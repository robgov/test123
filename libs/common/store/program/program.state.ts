import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { ProgramStateModel } from './program-state.model';

import { ProgramActions } from './program.actions';
import {
  ProgramService,
  SpecializationService,
  ProgramCostService,
  ProgramCredentialService,
  ProgramTypeService,
  SpecializationCostService,
  PostalCodeService,
  ProgramSummaryService,
} from '@libs/common/services';
import {
  VwProgram,
  ProgramsRequest,
  VwSpecialization,
  VwSpecializationCost,
  VwProgramCost,
  ProgramCostsRequest,
  VwPmpPsiprogramCountByCategory,
  VwProgramCredential,
  VwProgramType,
  SpecializationCostRequest,
  VwAbpostalCode,
  PostalCodeRequest,
  ProgramSummaryDto,
} from '@libs/common/models';
import { Injectable } from '@angular/core';
import { AppAction } from '@libs/common/store/common/app.actions';
import { DistanceHelper } from '@libs/common/helpers';

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
    private programTypeService: ProgramTypeService,
    private specializationCostService: SpecializationCostService,
    private postalCodeService: PostalCodeService,
    private programSummaryService: ProgramSummaryService
  ) {}

  @Action(AppAction.Start)
  onStart(ctx: StateContext<ProgramStateModel>, action: AppAction.Start) {
    console.log('initializing...');
    ctx.dispatch([
      new ProgramActions.GetPostalCodes(),
      // Loading lookups
      new ProgramActions.GetProgramCategoryCounts(),
      new ProgramActions.GetProgramCosts(),
      new ProgramActions.GetProgramCredentials(),
      // new ProgramActions.GetPrograms(),
      new ProgramActions.GetProgramSummaries(),
      new ProgramActions.GetProgramSpecializations(),
      new ProgramActions.GetProgramTypes(),
    ]);
  }

  @Action(ProgramActions.GetProgramSummaries)
  onGetProgramSummaries(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetProgramSummaries
  ) {
    return this.programSummaryService.getProgramSummaries().pipe(
      tap((data: ProgramSummaryDto[]) => {
        ctx.patchState({
          programSummaries: data,
        });
        ctx.dispatch(new ProgramActions.SetProgramProviderDistances());
      })
    );
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

  @Action(ProgramActions.GetPostalCodes)
  onGetPostalCodes(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetPostalCodes
  ) {
    
    return this.postalCodeService.getPostalCodes(new PostalCodeRequest()).pipe(
      tap((data: VwAbpostalCode[]) => {
        ctx.patchState({
          postalCodes: data,
        });
        ctx.dispatch(new ProgramActions.SetProgramProviderDistances());
      })
    );
  }

  // @Action(ProgramActions.GetSpecializationCosts)
  // onGetSpecializationCosts(
  //   ctx: StateContext<ProgramStateModel>,
  //   action: ProgramActions.GetSpecializationCosts
  // ) {
  //   return this.specializationCostService.getSpecializationCosts(new SpecializationCostRequest()).pipe(
  //     tap((data: VwSpecializationCost[]) => {
  //       ctx.patchState({
  //         specializationCosts: data,
  //       });
  //     })
  //   );
  // }

  @Action(ProgramActions.GetSpecializationCostForProgram)
  onGetSpecializationCostForProgram(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetSpecializationCostForProgram
  ) {
    return this.specializationCostService
      .getSpecializationCosts(
        new SpecializationCostRequest({ programId: action.programId })
      )
      .pipe(
        tap((data: VwSpecializationCost[]) => {
          ctx.patchState({
            specializationCosts: data,
          });
        })
      );
  }

  @Action(ProgramActions.GetSpecializationCostsForProvider)
  onGetSpecializationCostsForProvider(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.GetSpecializationCostsForProvider
  ) {
    return this.specializationCostService
      .getSpecializationCosts(
        new SpecializationCostRequest({ providerId: action.providerId })
      )
      .pipe(
        tap((data: VwSpecializationCost[]) => {
          ctx.patchState({
            specializationCosts: data,
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
  ) {
    return this.programTypeService.getProgramTypes().pipe(
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
      programSearchFilter_CipSubSeriesCode: action.categoryCode,
    });
  }

  @Action(ProgramActions.SetProgramSearchCredentialFilter)
  onSetProgramSearchCredentialFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchCredentialFilter
  ) {
    ctx.patchState({
      programSearchFilter_CredentialIds: action.credentialIds,
    });
  }

  @Action(ProgramActions.SetProgramSearchProgramTypeFilter)
  onSetProgramSearchProgramTypeFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchProgramTypeFilter
  ) {
    ctx.patchState({
      programSearchFilter_ProgramTypeIds: action.programTypeIds,
    });
  }

  @Action(ProgramActions.SetProgramSearchPostalCodeFilter)
  onSetProgramSearchPostalCodeFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchPostalCodeFilter
  ) {
    ctx.patchState({
      programSearchFilter_PostalCode: action.postalCode.toUpperCase(),
    });
    ctx.dispatch(new ProgramActions.SetProgramProviderDistances());
  }

  @Action(ProgramActions.SetProgramProviderDistances)
  onSetProgramProviderDistances(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramProviderDistances
  ) {
    const postalCode = ctx.getState().programSearchFilter_PostalCode;
    if (ctx.getState().postalCodes && ctx.getState().programSummaries && postalCode){
      const userLocation = ctx.getState().postalCodes.find(pc=>pc.postalCode === postalCode);

      const updatedProgramSummaries = ctx.getState().programSummaries;
      updatedProgramSummaries.forEach((summary)=>{
        summary.providerDistance = DistanceHelper.getDistanceFromLatLonInKm(userLocation,summary.longitude,summary.latitude)
      });
      ctx.patchState({
        programSummaries: updatedProgramSummaries
      });
    } 
  }

  @Action(ProgramActions.SetProgramSearchSortOrder)
  onSetProgramSearchSortOrder(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchSortOrder
  ) {
    ctx.patchState({
      programSearchFilter_Sort: action.sortOrder,
    });
  }
}
