import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { ProviderStateModel } from './provider-state.model';
import { ProviderActions } from './provider.actions';
import {
  ProviderLogoService,
  AlbertaPSIProviderService,
} from '@libs/common/services';
import {
  VwAlbertaPsiprovider,
  VwProviderLogo,
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
    private albertaPSIProviderService: AlbertaPSIProviderService,
    private providerLogoService: ProviderLogoService,
  ) {}

  @Action(AppAction.Start)
  onStart(ctx: StateContext<ProviderStateModel>, action: AppAction.Start) {
    console.log('initializing...');
    ctx.dispatch([
      new ProviderActions.GetProviders(),
      new ProviderActions.GetProviderLogos(),
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
}
