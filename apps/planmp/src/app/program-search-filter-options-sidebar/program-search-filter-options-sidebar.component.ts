import { Component, Input } from '@angular/core';
import { ProviderDto, ProgramCredentialDto, ProgramTypeDto } from '@libs/common/models';
import { ProgramActions } from '@libs/common/store/program';
import { Store } from '@ngxs/store';

@Component({
  selector: 'aedigital-program-search-filter-options-sidebar',
  templateUrl: './program-search-filter-options-sidebar.component.html',
  styleUrls: ['./program-search-filter-options-sidebar.component.scss']
})
export class ProgramSearchFilterOptionsSidebarComponent {
  @Input() providers: ProviderDto[];
  @Input() credentials: ProgramCredentialDto[];
  @Input() programTypes: ProgramTypeDto[];

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
