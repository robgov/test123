import {
    VwProviderAddress,
    VwAlbertaPsiprovider,
    VwProviderLogo,
  } from '@libs/common/models';
// import { ProviderAddressModel } from '@libs/common/models/provider-address.model';

export class ProviderStateModel {
  programProviders: VwAlbertaPsiprovider[];
  // providerAddresses: ProviderAddressModel[];
  providerLogos: VwProviderLogo[];
}
