import { Action, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { LookupActions } from './lookup.actions';
import { LookupService } from '@libs/common/services';
import { LookupRequest, VwPmpLookup } from '@libs/common/models';
import { Injectable } from '@angular/core';
import { AppAction } from '@libs/common/store/common/app.actions';
import { LookupStateModel } from './lookup-state.model';
import { ProgramActions } from '../program/program.actions';

const initialState = new LookupStateModel();

@State<LookupStateModel>({
  name: 'lookup',
  defaults: initialState,
})
@Injectable()
export class LookupState {
  constructor(private lookupService: LookupService) {}

  @Action(AppAction.Start)
  onStart(ctx: StateContext<LookupStateModel>, action: AppAction.Start) {
    console.log('initializing...');
    ctx.dispatch([new LookupActions.GetLookups(new LookupRequest())]);
  }

  @Action(LookupActions.GetLookups)
  onGetLookups(
    ctx: StateContext<LookupStateModel>,
    action: LookupActions.GetLookups
  ) {
    return this.lookupService.getLookups(action.request).pipe(
      tap((data: VwPmpLookup[]) => {
        ctx.patchState({
          lookups: data,
        });
        // Set Google Api Key in Program State
        const apiKey = data.find(l=>l.type === 'GoogleApiKey').value;
        ctx.dispatch(new ProgramActions.SetGoogleApiKey(apiKey));
      })
    );
  }
}
