import {
    VwProviderAddress,
    VwAlbertaPsiprovider,
    VwProviderLogo,
    VwProviderWebsite,
  } from '@libs/common/models';

export class ProviderStateModel {
  programProviders: VwAlbertaPsiprovider[];
  providerLocations: VwProviderAddress[];
  providerLogos: VwProviderLogo[];
  providerWebsites: VwProviderWebsite[];
  providerAddresses: VwProviderAddress[];
}
