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
  GoogleGeocodeApiService,
} from '@libs/common/services';
import {
  ProgramDto,
  ProgramsRequest,
  SpecializationDto,
  SpecializationCostDto,
  ProgramCostDto,
  ProgramCostsRequest,
  PsiSpecializationCountByCategoryDto,
  ProgramCredentialDto,
  ProgramTypeDto,
  SpecializationCostRequest,
  PostalCodeDto,
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
    private programSummaryService: ProgramSummaryService,
    private googleGeocodeApiService: GoogleGeocodeApiService
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
      new ProgramActions.GetProgramSummaries(),
      new ProgramActions.GetProgramSpecializations(),
      new ProgramActions.GetProgramTypes(),
    ]);
  }

  @Action(ProgramActions.SetGoogleApiKey)
  onSetGoogleApiKey(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetGoogleApiKey
  ) {
    ctx.patchState({
      googleApiKey: action.googleApiKey,
    });
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
      tap((data: ProgramDto[]) => {
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
      tap((data: SpecializationDto[]) => {
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
      tap((data: PostalCodeDto[]) => {
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
        tap((data: SpecializationCostDto[]) => {
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
        tap((data: SpecializationCostDto[]) => {
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
        tap((data: ProgramCostDto[]) => {
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
      tap((data: ProgramTypeDto[]) => {
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
      tap((data: PsiSpecializationCountByCategoryDto[]) => {
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
      tap((data: ProgramCredentialDto[]) => {
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
      searchFilters: { ... ctx.getState().searchFilters , providerIds: action.providerIds}
    });
  }

  @Action(ProgramActions.SetProgramSearchCategoryFilter)
  onSetProgramSearchCategoryFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchCategoryFilter
  ) {
    ctx.patchState({
      searchFilters: { ... ctx.getState().searchFilters , cipSubSeriesCode: action.categoryCode}
    });
  }

  @Action(ProgramActions.SetProgramSearchKeywordFilter)
  onSetProgramSearchKeywordFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchKeywordFilter
  ) {
    ctx.patchState({
      searchFilters: { ... ctx.getState().searchFilters , keywords: action.keywords}
    });
  }

  @Action(ProgramActions.SetProgramSearchDistanceFilter)
  onSetProgramSearchDistanceFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchDistanceFilter
  ) {
    ctx.patchState({
      searchFilters: { ... ctx.getState().searchFilters , distanceInKm: action.distance}
    });   
  }

  @Action(ProgramActions.SetProgramSearchCredentialFilter)
  onSetProgramSearchCredentialFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchCredentialFilter
  ) {
    ctx.patchState({
      searchFilters: { ... ctx.getState().searchFilters , credentialIds: action.credentialIds}
    });
  }

  @Action(ProgramActions.SetProgramSearchProgramTypeFilter)
  onSetProgramSearchProgramTypeFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchProgramTypeFilter
  ) {
    ctx.patchState({
      searchFilters: { ... ctx.getState().searchFilters , programTypeIds: action.programTypeIds}
    });   
  }

  @Action(ProgramActions.SetProgramSearchUserLocationFilter)
  onSetProgramSearchUserLocationFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchUserLocationFilter
  ) {
    return this.googleGeocodeApiService
      .getPostalCodeFromLatLong(
        ctx.getState().googleApiKey,
        action.latitude,
        action.longitude
      )
      .pipe(
        tap((data: any) => {
          ctx.patchState({
            searchFilters: { ... ctx.getState().searchFilters , 
                              latitude: action.latitude, 
                              longitude: action.longitude, 
                              locationName: data.plus_code ? data.plus_code : '', 
                              postalCode: ''}
          });
          // ctx.patchState({
          //   programSearchFilter_Latitude: action.latitude,
          //   programSearchFilter_Longitude: action.longitude,
          //   programSearchFilter_LocationName: data.plus_code
          //     ? data.plus_code.compound_code
          //     : '',
          //   programSearchFilter_PostalCode: '',
          // });
          ctx.dispatch(new ProgramActions.SetProgramProviderDistances());
        })
      );
  }

  @Action(ProgramActions.SetProgramSearchPostalCodeFilter)
  onSetProgramSearchPostalCodeFilter(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchPostalCodeFilter
  ) {
    let location: string = action.postalCode;
    if (action.postalCode.length == 6) {
      location =
        action.postalCode.toUpperCase().substring(0, 3) +
        ' ' +
        action.postalCode.toUpperCase().substring(3, 6);
    }
    ctx.patchState({
      searchFilters: { ... ctx.getState().searchFilters , 
                        locationName: location, 
                        postalCode: action.postalCode.toUpperCase(), 
                        longitude:null, 
                        latitude: null}
    });
    ctx.dispatch(new ProgramActions.SetProgramProviderDistances());
  }

  @Action(ProgramActions.ResetProgramProviderDistances)
  onResetProgramProviderDistances(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramProviderDistances
  ) {
    const updatedProgramSummaries = ctx.getState().programSummaries;
    updatedProgramSummaries.forEach((summary) => {
      summary.providerDistance = null;
    });
    ctx.getState()
    ctx.patchState({
      programSummaries: updatedProgramSummaries,
      searchFilters: {... ctx.getState().searchFilters, locationName: ''}
    });
  }

  @Action(ProgramActions.SetProgramProviderDistances)
  onSetProgramProviderDistances(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramProviderDistances
  ) {
    const userPostalCode = ctx.getState().searchFilters.postalCode;
    const userLatitude = ctx.getState().searchFilters.latitude;
    const userLongitude = ctx.getState().searchFilters.longitude;
    if (
      ctx.getState().postalCodes &&
      ctx.getState().programSummaries &&
      (userPostalCode || (userLatitude != 0 && userLongitude != 0))
    ) {
      let userLocation: PostalCodeDto = new PostalCodeDto();
      if (userPostalCode) {
        userLocation = ctx
          .getState()
          .postalCodes.find((pc) => pc.postalCode === userPostalCode);
      } else {
        userLocation.longitude = userLongitude;
        userLocation.latitude = userLatitude;
      }

      const updatedProgramSummaries = ctx.getState().programSummaries;
      updatedProgramSummaries.forEach((summary) => {
        summary.providerDistance = DistanceHelper.getDistanceFromLatLonInKm(
          userLocation,
          summary.longitude,
          summary.latitude
        );
      });
      ctx.patchState({
        programSummaries: updatedProgramSummaries,
      });
    }
    if (userLatitude === 0 && userLongitude === 0 && !userPostalCode) {
      ctx.dispatch(new ProgramActions.ResetProgramProviderDistances());
    }
  }

  @Action(ProgramActions.SetProgramSearchSortOrder)
  onSetProgramSearchSortOrder(
    ctx: StateContext<ProgramStateModel>,
    action: ProgramActions.SetProgramSearchSortOrder
  ) {
    ctx.patchState({
      searchFilters: { ... ctx.getState().searchFilters, sort: action.sortOrder }
    });
  }
}
