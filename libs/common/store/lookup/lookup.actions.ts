import {LookupRequest} from '@libs/common/models';

export namespace LookupActions {
    export class GetLookups {
      static readonly type = '[Aed Lookups] Get Lookups';
      constructor (public request:LookupRequest) {}
    }
}