import {
    VwProviderAddress,
    VwAlbertaPsiprovider,
    VwProviderLogo,
  } from '@libs/common/models';

export class ProviderStateModel {
  programProviders: VwAlbertaPsiprovider[];
  providerLocations: VwProviderAddress[];
  providerLogos: VwProviderLogo[];
}
