import { Component, Input } from '@angular/core';
import { VwAlbertaPsiprovider, VwPmpLookup, VwPmpPsiprogramCountByCategory, VwProgramCredential, VwProgramType, VwSpecializationPrograms } from '@libs/common/models';
import { ProgramActions } from '@libs/common/store/program';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

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
  sortOrderSelected(sortOrder: string){
    return new ProgramActions.SetProgramSearchSortOrder(sortOrder);
  }

  @Dispatch()
  showProgramSort(){
    return new ProgramActions.ShowProgramSort();
  }

  @Dispatch()
  showProgramFilter() {
    return new ProgramActions.ShowProgramFilter();
  }
}
