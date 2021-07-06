import { Component, Input } from '@angular/core';
import { ProviderDto, ProgramCredentialDto, ProgramTypeDto } from '@libs/common/models';
import { ProgramActions } from '@libs/common/store/program';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

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
  @Input() selectedCredentialIds: number[];

  @Dispatch()
  providerSelected(providerIds: number[]){
    return new ProgramActions.SetProgramSearchProviderFilter(providerIds);
  }

  @Dispatch()
  categorySelected(categoryCode: string){
    return new ProgramActions.SetProgramSearchCategoryFilter(categoryCode);
  }

  @Dispatch()
  credentialSelected(credentialIds: number[]){
    return new ProgramActions.SetProgramSearchCredentialFilter(credentialIds);
  }

  @Dispatch()
  programTypeSelected(programTypeIds: number[]){
    return new ProgramActions.SetProgramSearchProgramTypeFilter(programTypeIds);
  }

  @Dispatch()
  close(){
    return new ProgramActions.CloseSidebar();
  }
}
