import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { ProviderStateModel } from './provider-state.model';
import { ProviderActions } from './provider.actions';
import {
  ProviderLogoService,
  AlbertaPSIProviderService,
  ProviderAddressService,
} from '@libs/common/services';
import {
  VwAlbertaPsiprovider,
  VwProviderAddress,
  VwProviderLogo,
} from '@libs/common/models';
import { Injectable } from '@angular/core';
import { AppAction } from '@libs/common/store/common/app.actions';
// import { ProviderAddressModel } from '@libs/common/models/provider-address.model';
import { ProgramStateModel } from '../store-index';
import { DistanceHelper } from '@libs/common/helpers';

const initialState = new ProviderStateModel();

@State<ProviderStateModel>({
  name: 'provider',
  defaults: initialState,
})
@Injectable()
export class ProviderState {
  constructor(
    private albertaPSIProviderService: AlbertaPSIProviderService,
    private providerLogoService: ProviderLogoService,
    private providerAddressService: ProviderAddressService
  ) {}

  @Action(AppAction.Start)
  onStart(ctx: StateContext<ProviderStateModel>, action: AppAction.Start) {
    console.log('initializing...');
    ctx.dispatch([
      new ProviderActions.GetProviders(),
      new ProviderActions.GetProviderLogos(),
      new ProviderActions.GetProviderAddresses(),
    ]);
  }

  @Action(ProviderActions.GetProviders)
  onGetProgramProviders(
    ctx: StateContext<ProviderStateModel>,
    action: ProviderActions.GetProviders
  ) {
    return this.albertaPSIProviderService.getAlbertaPsiProviders().pipe(
      tap((data: VwAlbertaPsiprovider[]) => {
        ctx.patchState({
          programProviders: data,
        });
      })
    );
  }

  @Action(ProviderActions.GetProviderLogos)
  onGetProgramProviderLogos(
    ctx: StateContext<ProviderStateModel>,
    action: ProviderActions.GetProviderLogos
  ) {
    return this.providerLogoService.getProviderLogos().pipe(
      tap((data: VwProviderLogo[]) => {
        ctx.patchState({
          providerLogos: data,
        });
      })
    );
  }

  // @Action(ProviderActions.GetProviderAddresses)
  // onGetProviderLocations(
  //   ctx: StateContext<ProviderAddressModel>,
  //   action: ProviderActions.GetProviderAddresses
  // ) {
  //   return this.providerAddressService.getProviderAddresses().pipe(
  //     tap((data: ProviderAddressModel[]) => {
  //       ctx.patchState({
  //         providerAddresses: data,
  //       });
  //     })
  //   );
  // }

  @Action(ProviderActions.SetProviderDistances)
  onSetProviderDistances(
    ctx: StateContext<ProviderStateModel>,
    programState: StateContext<ProgramStateModel>,
    action: ProviderActions.SetProviderDistances
  ) {
    // const postalCode = programState.getState().programSearchFilter_PostalCode;
    // if (programState.getState().postalCodes && programState.getState().programSummaries){
    //   const userLocation = programState.getState().postalCodes.find(pc=>pc.postalCode === postalCode);

    //   const updatedProviderAddresses = ctx.getState().providerAddresses;
    //   updatedProviderAddresses.forEach((address)=>{
    //     address.distance = DistanceHelper.getDistanceFromLatLonInKm(userLocation,address.providerAddress.providerId,address.providerAddress,programState.getState())
    //   });
    //   ctx.patchState({
    //     providerAddresses: updatedProviderAddresses
    //   });
    // } 
  }
}