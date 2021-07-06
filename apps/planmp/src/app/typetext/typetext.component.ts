import {Component, ChangeDetectionStrategy} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {Observable} from 'rxjs';
import { ProgramActions, ProgramSelectors, ProviderActions } from '@libs/common/store/store-index';
import { LookupDto } from '@libs/common/models';

@Component({
  selector: 'ae-typetext',
  templateUrl: './typetext.component.html',
  styleUrls: ['./typetext.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypetextComponent {
    @Select(ProgramSelectors.getProvidersAndCips) getProvidersAndCips$: Observable<LookupDto[]>   
    @Select(ProgramSelectors.getSelectedLocation) getSelectedLocation$: Observable<string>

    constructor(private store: Store){
      store.dispatch(new ProviderActions.GetProviders());
      store.dispatch(new ProgramActions.GetProgramCategoryCounts());
    }
}
