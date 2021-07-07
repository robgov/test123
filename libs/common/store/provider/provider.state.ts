import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { ProviderStateModel } from './provider-state.model';
import { ProviderActions } from './provider.actions';
import {
  ProviderService,
} from '@libs/common/services';
import {
  ProviderDto,
  ProviderLogoDto,
  ProviderWebsiteDto,
  ProviderAddressRequest,
  ProviderWebsiteRequest,
  ProviderAddressDto,
} from '@libs/common/models';
import { Injectable } from '@angular/core';
import { AppAction } from '@libs/common/store/common/app.actions';

const initialState = new ProviderStateModel();

@State<ProviderStateModel>({
  name: 'provider',
  defaults: initialState,
})
@Injectable()
export class ProviderState {
  constructor(
    private providerService: ProviderService,
  ) {}

  @Action(AppAction.Start)
  onStart(ctx: StateContext<ProviderStateModel>, action: AppAction.Start) {
    console.log('initializing...');
    ctx.dispatch([
      new ProviderActions.GetProviders(),
      new ProviderActions.GetProviderLogos(),
      new ProviderActions.GetProviderWebsites(),
      new ProviderActions.GetProviderAddresses(),
    ]);
  }

  @Action(ProviderActions.GetProviders)
  onGetProgramProviders(
    ctx: StateContext<ProviderStateModel>,
    action: ProviderActions.GetProviders
  ) {
    return this.providerService.getAlbertaPsiProviders().pipe(
      tap((data: ProviderDto[]) => {
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
    return this.providerService.getProviderLogos().pipe(
      tap((data: ProviderLogoDto[]) => {
        ctx.patchState({
          providerLogos: data,
        });
      })
    );
  }
  
  @Action(ProviderActions.GetProviderWebsites)
  onGetProgramProviderWebsite(
    ctx: StateContext<ProviderStateModel>,
    action: ProviderActions.GetProviderWebsites
  ) {
    return this.providerService.getProviderWebsites(new ProviderWebsiteRequest()).pipe(
      tap((data: ProviderWebsiteDto[]) => {
        ctx.patchState({
          providerWebsites: data,
        });
      })
    );
  }

  @Action(ProviderActions.GetProviderAddresses)
  onGetProgramProviderAddress(
    ctx: StateContext<ProviderStateModel>,
    action: ProviderActions.GetProviderAddresses
  ) {
    return this.providerService.getProviderAddresses(new ProviderAddressRequest()).pipe(
      tap((data: ProviderAddressDto[]) => {
        ctx.patchState({
          providerAddresses: data,
        });
      })
    );
  }

}
