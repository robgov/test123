import { createSelector, Selector } from '@ngxs/store';
import { LookupState } from './lookup.state';
import { LookupStateModel } from './lookup-state.model';
import { VwPmpLookup } from '@libs/common/models';
import { state } from '@angular/animations';

export class LookupSelectors {
  @Selector([LookupState])
  static getLookups(state: LookupStateModel): VwPmpLookup[] {
    return state.lookups;
  }
}
