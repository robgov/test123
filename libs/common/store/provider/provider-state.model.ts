import {
    ProviderAddressDto,
    ProviderDto,
    ProviderLogoDto,
    ProviderWebsiteDto,
  } from '@libs/common/models';

export class ProviderStateModel {
  programProviders: ProviderDto[];
  providerLogos: ProviderLogoDto[];
  providerWebsites: ProviderWebsiteDto[];
  providerAddresses: ProviderAddressDto[];
}
