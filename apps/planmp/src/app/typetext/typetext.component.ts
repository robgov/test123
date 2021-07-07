import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Select } from '@ngxs/store';
import {Observable} from 'rxjs';
import { ProgramActions, ProgramSelectors, ProviderActions } from '@libs/common/store';
import { LookupDto } from '@libs/common/models';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
  selector: 'ae-typetext',
  templateUrl: './typetext.component.html',
  styleUrls: ['./typetext.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypetextComponent implements OnInit {
    @Select(ProgramSelectors.getProvidersAndCips) getProvidersAndCips$: Observable<LookupDto[]>   
    @Select(ProgramSelectors.getSelectedLocation) getSelectedLocation$: Observable<string>

    ngOnInit() {
      this.getInfo();
    }

    @Dispatch()
    getInfo(){
      return [new ProviderActions.GetProviders(),new ProgramActions.GetProgramCategoryCounts()];
    }
}
