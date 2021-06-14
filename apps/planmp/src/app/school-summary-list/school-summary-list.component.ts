import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProgramActions, ProgramSelectors } from '@libs/common/store/program';
import { VwProgram, VwProvider } from '@libs/common/models';

@Component({
  selector: 'aedigital-school-summary-list',
  templateUrl: './school-summary-list.component.html',
  styleUrls: ['./school-summary-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolSummaryListComponent {
  @Select(ProgramSelectors.programProviders) programProviders$: Observable<VwProvider[]>;

  constructor(private store: Store) {
  }

  getProviderPrograms(provider: VwProvider): Observable<VwProgram[]> {
    return this.store.select(
      ProgramSelectors.getProviderPrograms(provider.providerId)
    );
  }
}
