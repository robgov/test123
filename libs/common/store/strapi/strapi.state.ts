import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { StrapiStateModel } from './strapi-state.model';
import { StrapiActions } from './strapi.actions';
import { StrapiService } from '@libs/common/services';
import { Injectable } from '@angular/core';
import { AppAction } from '@libs/common/store/common/app.actions';
import {
  StrapiProgramDto,
  StrapiProgramTabDto,
  StrapiProgramTabSectionDto,
} from '@libs/common/models';

const initialState = new StrapiStateModel();

@State<StrapiStateModel>({
  name: 'strapi',
  defaults: initialState,
})
@Injectable()
export class StrapiState {
  constructor(private strapiService: StrapiService) {}
  @Action(AppAction.Start)
  onStart(ctx: StateContext<StrapiStateModel>, action: AppAction.Start) {
    console.log('initializing...');
    ctx.dispatch([
      new StrapiActions.GetProgramData(),
      new StrapiActions.GetLoanData(),
      new StrapiActions.GetProgramDetailData(),
    ]);
    ctx.patchState({
      baseUrl: this.strapiService.urlBase,
    });
  }

  @Action(StrapiActions.GetProgramData)
  onGetProgramData(
    ctx: StateContext<StrapiStateModel>,
    action: StrapiActions.GetProgramData
  ) {
    return this.strapiService.getProgramData().pipe(
      tap((data: object[]) => {
        ctx.patchState({
          programData: data,
        });
      })
    );
  }

  @Action(StrapiActions.GetLoanData)
  onGetLoanData(
    ctx: StateContext<StrapiStateModel>,
    action: StrapiActions.GetLoanData
  ) {
    return this.strapiService.getLoanData().pipe(
      tap((data: object[]) => {
        ctx.patchState({
          loanData: data,
        });
      })
    );
  }

  @Action(StrapiActions.GetProgramDetailData)
  onGetProgramDetailData(
    ctx: StateContext<StrapiStateModel>,
    action: StrapiActions.GetProgramDetailData
  ) {
    return this.strapiService.getProgramDetailTabData().pipe(
      tap((data: any) => {
        var newProgramData: StrapiProgramDto[] = [];
        data.forEach((tab) => {
          const programId = tab.program.program_id;

          // Add the program data if it doesn't exist.
          var existingProgramData = newProgramData.find(
            (pd) => pd.program_id == programId
          );
          if (!existingProgramData) {
            newProgramData.push(tab.program as StrapiProgramDto);
            existingProgramData = tab.program as StrapiProgramDto;
          }

          // Add the tab
          var castTab = tab as StrapiProgramTabDto;
          // Ensure the tab as the sections.
          castTab.sections = tab.program_tab_sections as StrapiProgramTabSectionDto[];
          if (!existingProgramData.tabs) {
            existingProgramData.tabs= [];
          }
          existingProgramData.tabs.push(castTab);
        });
        // Now patch the state.
        ctx.patchState({
          programDetailData: newProgramData,
        });
      })
    );
  }
}
