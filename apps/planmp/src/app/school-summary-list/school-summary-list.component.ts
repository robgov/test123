import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  ProgramSelectors,
  ProviderSelectors,
} from '@libs/common/store';
import { ProgramDto, ProviderDto } from '@libs/common/models';

@Component({
  selector: 'aedigital-school-summary-list',
  templateUrl: './school-summary-list.component.html',
  styleUrls: ['./school-summary-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolSummaryListComponent {
  @Select(ProviderSelectors.getProviders) programProviders$: Observable<ProviderDto[]>;

  constructor(private store: Store) {}

  getProviderPrograms(provider: ProviderDto): Observable<ProgramDto[]> {
    return this.store.select(
      ProgramSelectors.getProviderPrograms(provider.providerId)
    );
  }
}
