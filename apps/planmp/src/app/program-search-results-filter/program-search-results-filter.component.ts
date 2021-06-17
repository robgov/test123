import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { VwAlbertaPsiprovider, VwPmpPsiprogramCountByCategory, VwProgramCredential, VwSpecializationPrograms } from '@libs/common/models';
import { ProgramActions } from '@libs/common/store/program';
import { Store } from '@ngxs/store';

@Component({
  selector: 'aedigital-program-search-results-filter',
  templateUrl: './program-search-results-filter.component.html',
  styleUrls: ['./program-search-results-filter.component.scss']
})
export class ProgramSearchResultsFilterComponent implements OnInit {
  @Input() categoryPrograms: VwSpecializationPrograms[];
  @Input() providers: VwAlbertaPsiprovider[];
  @Input() programCountsByCategory: VwPmpPsiprogramCountByCategory[];
  @Input() credentials: VwProgramCredential[];

  selectedProviderId: string="0";
  selectedCipsCode: string="";
  selectedCredentialId: string="0";

  @Output() CriteriaChanged = new EventEmitter<number>();
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  providerSelected(providerId: number){
    this.store.dispatch(new ProgramActions.SetProgramSearchProviderFilter(providerId));
  }

  categorySelected(categoryCode: string){
    this.store.dispatch(new ProgramActions.SetProgramSearchCategoryFilter(categoryCode));
  }

  credentialSelected(credentialId: number){
    this.store.dispatch(new ProgramActions.SetProgramSearchCredentialFilter(credentialId));
  }
}
