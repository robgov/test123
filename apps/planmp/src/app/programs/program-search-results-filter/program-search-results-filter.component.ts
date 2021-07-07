import { Component, Input } from '@angular/core';
import { ProviderDto, LookupDto, PsiSpecializationCountByCategoryDto, ProgramCredentialDto, ProgramTypeDto } from '@libs/common/models';
import { ProgramActions } from '@libs/common/store/program';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
  selector: 'aedigital-program-search-results-filter',
  templateUrl: './program-search-results-filter.component.html',
  styleUrls: ['./program-search-results-filter.component.scss']
})
export class ProgramSearchResultsFilterComponent {
  @Input() providers: ProviderDto[];
  @Input() programCountsByCategory: PsiSpecializationCountByCategoryDto[];
  @Input() credentials: ProgramCredentialDto[];
  @Input() programTypes: ProgramTypeDto[];
  @Input() sortOptions: LookupDto[];
  @Input() distanceFilters: LookupDto[];

  @Input() selectedProviderIds: number[];
  @Input() selectedCredentialIds: number[];
  @Input() selectedLocation: string;
  @Input() selectedCipSubSeriesCode: string;

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
  distanceFilterSelected(distance: number){
    return new ProgramActions.SetProgramSearchDistanceFilter(distance);
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

  getSelectedCipSubSeries(){
    if (this.selectedCipSubSeriesCode && this.programCountsByCategory) {
      return this.programCountsByCategory.find(pc=>pc.cipSubSeriesCode == this.selectedCipSubSeriesCode).cipSubSeries;
    }
  }
  
  @Dispatch()
  removeCipSubSeries() {
    return new ProgramActions.SetProgramSearchCategoryFilter("");
  }

  getSelectedLocation() {
    if (this.selectedLocation) {
      return this.selectedLocation;
    }
  }

  @Dispatch()
  removePostalCode() {
    return new ProgramActions.SetProgramSearchPostalCodeFilter("");
  }
}
