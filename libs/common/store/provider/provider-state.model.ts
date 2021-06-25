import {
    VwProviderAddress,
    VwAlbertaPsiprovider,
    VwProviderLogo,
    VwProviderWebsite,
  } from '@libs/common/models';
// import { ProviderAddressModel } from '@libs/common/models/provider-address.model';

export class ProviderStateModel {
  programProviders: VwAlbertaPsiprovider[];
  providerLogos: VwProviderLogo[];
  providerWebsites: VwProviderWebsite[];
  providerAddresses: VwProviderAddress[];
}
