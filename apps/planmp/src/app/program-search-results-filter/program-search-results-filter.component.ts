import { Component, Input } from '@angular/core';
import { DistanceHelper } from '@libs/common/helpers';
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
  @Input() distanceFilters: VwPmpLookup[];

  @Input() selectedProviderIds: number[];
  @Input() selectedCredentialIds: number[];
  @Input() selectedLocation: string;
  @Input() selectedCipSubSeriesCode: string;

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
  distanceFilterSelected(distanceFilterId: string){
    switch (distanceFilterId) {
      case "1":
        return new ProgramActions.SetProgramSearchDistanceFilter(5);
        break;
      case "2":
        return new ProgramActions.SetProgramSearchDistanceFilter(25);
        break;
      case "3":
        return new ProgramActions.SetProgramSearchDistanceFilter(100);
        break;
      case "4":
        return new ProgramActions.SetProgramSearchDistanceFilter(200);
        break;
      default:
        return new ProgramActions.SetProgramSearchDistanceFilter(0);
        break;
    }
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
