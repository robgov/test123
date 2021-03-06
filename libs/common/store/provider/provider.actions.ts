export namespace ProviderActions {
    // Provider Info
  export class GetProviders {
    static readonly type = '[Aed Providers] Get Program Providers';
  }

  export class GetProviderLogos {
    static readonly type = '[Aed Providers] Get Program Provider Logos';
  }

  export class GetProviderDistances {
    static readonly type = '[Aed Providers] Get Provider Distances';
  }

  // export class SetProviderDistances {
  //   static readonly type = '[Aed Providers] Set Provider Distances';
  // }
  export class GetProviderWebsites {
    static readonly type = '[Aed Providers] Get Program Provider Websites';
  }

  export class GetProviderAddresses {
    static readonly type = '[Aed Providers] Get Program Provider addresses';
  }
}