import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VwAlbertaPsiprovider, VwPmpLookup, VwPmpPsiprogramCountByCategory, VwProgramCredential, VwProgramType, VwSpecializationPrograms } from '@libs/common/models';
import { ProgramActions } from '@libs/common/store/program';
import { Store } from '@ngxs/store';

@Component({
  selector: 'aedigital-program-search-results-filter',
  templateUrl: './program-search-results-filter.component.html',
  styleUrls: ['./program-search-results-filter.component.scss']
})
export class ProgramSearchResultsFilterComponent {
  @Input() categoryPrograms: VwSpecializationPrograms[];
  @Input() providers: VwAlbertaPsiprovider[];
  @Input() programCountsByCategory: VwPmpPsiprogramCountByCategory[];
  @Input() credentials: VwProgramCredential[];
  @Input() programTypes: VwProgramType[];
  @Input() sortOptions: VwPmpLookup[];

  @Input() selectedProviderIds: number[];
  @Input() selectedCredentialIds: number[];

  selectedCipsCode: string="";
  
  selectedSortOrder: string="1";

  @Output() CriteriaChanged = new EventEmitter<number>();
  constructor(private store: Store) { }

  providerSelected(providerIds: number[]){
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

  sortOrderSelected(sortOrder: string){
    this.store.dispatch(new ProgramActions.SetProgramSearchSortOrder(sortOrder));
  }

  showProgramSort(){
    this.store.dispatch(new ProgramActions.ShowProgramSort());
  }

  showProgramFilter() {
    this.store.dispatch(new ProgramActions.ShowProgramFilter());
  }
}
