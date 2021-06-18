import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { VwAlbertaPsiprovider, VwPmpLookup, VwPmpPsiprogramCountByCategory, VwProgramCredential, VwProgramType, VwSpecializationPrograms } from '@libs/common/models';
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
  @Input() programTypes: VwProgramType[];
  @Input() sortOptions: VwPmpLookup[];

  selectedProviderId: string[]=[""];
  selectedCipsCode: string="";
  selectedCredentialId: string[]=[""];

  @Output() CriteriaChanged = new EventEmitter<number>();
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  providerSelected(providerIds: any[]){
    this.store.dispatch(new ProgramActions.SetProgramSearchProviderFilter(providerIds));
  }

  categorySelected(categoryCode: string){
    this.store.dispatch(new ProgramActions.SetProgramSearchCategoryFilter(categoryCode));
  }

  credentialSelected(credentialIds: number[]){
    this.store.dispatch(new ProgramActions.SetProgramSearchCredentialFilter(credentialIds));
  }

  programTypeSelected(programTypeIds: number[]){
    this.store.dispatch(new ProgramActions.SetProgramSearchProgramTypeFilter(programTypeIds));
  }
}
