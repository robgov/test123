import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VwAlbertaPsiprovider, VwPmpLookup, VwPmpPsiprogramCountByCategory, VwProgramCredential, VwProgramType, VwSpecializationPrograms } from '@libs/common/models';
import { ProgramActions } from '@libs/common/store/program';
import { Store } from '@ngxs/store';

@Component({
  selector: 'aedigital-program-search-filter-options-sidebar',
  templateUrl: './program-search-filter-options-sidebar.component.html',
  styleUrls: ['./program-search-filter-options-sidebar.component.scss']
})
export class ProgramSearchFilterOptionsSidebarComponent {
  @Input() categoryPrograms: VwSpecializationPrograms[];
  @Input() providers: VwAlbertaPsiprovider[];
  @Input() credentials: VwProgramCredential[];
  @Input() programTypes: VwProgramType[];

  @Input() selectedProviderIds: number[];
  selectedCipsCode: string="";
  @Input() selectedCredentialIds: number[];

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

  close() {
    this.store.dispatch(new ProgramActions.CloseProgramFilter());
  }

}
