import { createSelector, Selector } from '@ngxs/store';
import { LookupState } from './lookup.state';
import { LookupStateModel } from './lookup-state.model';

export class LookupSelectors {
  static getLookupsForType(lookupType: string) {
    return createSelector([LookupState],(state: LookupStateModel) => {
      return state.lookups.filter(l=>l.type === lookupType);
    });
  }
}
