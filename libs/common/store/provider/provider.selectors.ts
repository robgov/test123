import { createSelector, Selector } from '@ngxs/store';
import { ProviderState } from './provider.state';
import { ProviderStateModel } from './provider-state.model';
import {
  ProviderDto,
  ProviderLogoDto,
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

  static getProviderWebsite(id: number) {
    return createSelector([ProviderState], (state: ProviderStateModel) =>
      state.providerWebsites.find((q) => q.providerId === id)
    );
  }

  static getProviderAddress(id: number) {
    return createSelector([ProviderState], (state: ProviderStateModel) =>
      state.providerAddresses.find((q) => q.providerId === id)
    );
  }

  @Selector([ProviderState])
  static getProviders(state: ProviderStateModel): ProviderDto[] {
    return state.programProviders;
  }

  @Selector([ProviderState])
  static getProviderLogos(state: ProviderStateModel): ProviderLogoDto[] {
    return state.providerLogos;
  }
}
