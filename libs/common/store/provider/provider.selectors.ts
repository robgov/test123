import { createSelector, Selector } from '@ngxs/store';
import { ProviderState } from './provider.state';
import { ProviderStateModel } from './provider-state.model';
import {
  VwProvider,
  VwProviderLogo,
} from '@libs/common/models';

export class ProviderSelectors {
// Provider Selectors
static getProvider(id: number) {
    return createSelector([ProviderState], (state: ProviderStateModel) =>
      state.programProviders.find((q) => q.providerId === id)
    );
  }

  static getProviderLogo(id: number) {
    return createSelector([ProviderState], (state: ProviderStateModel) =>
      state.providerLogos.find((q) => q.providerId === id)
    );
  }

  @Selector([ProviderState])
  static getProviders(state: ProviderStateModel): VwProvider[] {
    return state.programProviders;
  }

  @Selector([ProviderState])
  static getProviderLogos(state: ProviderStateModel): VwProviderLogo[] {
    return state.providerLogos;
  }
}