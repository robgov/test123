import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { StrapiStateModel } from './strapi-state.model';
import { StrapiActions } from './strapi.actions';
import { StrapiService } from '@libs/common/services';
import { Injectable } from '@angular/core';
import { AppAction } from '@libs/common/store/common/app.actions';

const initialState = new StrapiStateModel();

@State<StrapiStateModel>({
  name: 'strapi',
  defaults: initialState,
})
@Injectable()
export class StrapiState {
    constructor(
        private strapiService: StrapiService,
        ) {}
    @Action(AppAction.Start)
    onStart(ctx: StateContext<StrapiStateModel>, action: AppAction.Start) {
        console.log('initializing...');
        ctx.dispatch([
            new StrapiActions.GetProgramData(),
            new StrapiActions.GetLoanData()
        ]);
        ctx.patchState({
            baseUrl: this.strapiService.urlBase
        });
    }

    @Action(StrapiActions.GetProgramData)
    onGetProgramData(ctx: StateContext<StrapiStateModel>, action: StrapiActions.GetProgramData) {
        return this.strapiService.getProgramData().pipe(
            tap((data: object[]) => {
              ctx.patchState({
                programData: data,
              });
            })
        );
    }

    @Action(StrapiActions.GetLoanData)
    onGetLoanData(ctx: StateContext<StrapiStateModel>, action: StrapiActions.GetLoanData) {
        return this.strapiService.getLoanData().pipe(
            tap((data: object[]) => {
              ctx.patchState({
                loanData: data,
              });
            })
        );
    }
}
