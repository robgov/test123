import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import {
  VwAlbertaPsiprovider,
  VwProgram,
  VwSpecialization,
  VwProviderLogo,
  VwProgramCost,
  VwPmpPsiprogramByCategoryList,
  VwProvider,
  VwPmpPsiprogramCountByCategory,
  VwProgramCredential,
  VwProgramType,
  VwPmpLookup
} from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { LookupSelectors, ProgramSelectors, ProviderSelectors } from '@libs/common/store/store-index';

@Component({
  selector: 'aedigital-programs-search-results',
  templateUrl: './programs-search-results.component.html',
  styleUrls: ['./programs-search-results.component.scss'],
})
export class ProgramsSearchResultsComponent implements OnInit, OnDestroy {
  FlexConstants = FlexConstants;

  @Select(ProgramSelectors.getProgramSpecializations) programSpecializations$: Observable<VwSpecialization[]>;
  @Select(ProgramSelectors.getCategoryPrograms) categoryPrograms$: Observable<VwSpecialization[]>;
  @Select(ProgramSelectors.getProgramCredentials) programCredentials$: Observable<VwProgramCredential[]>
  @Select(ProgramSelectors.getFilteredPrograms) filteredPrograms$: Observable<VwProgram[]>
  @Select(ProgramSelectors.getProgramCategoryCounts) programCountsByCategory$: Observable<VwPmpPsiprogramCountByCategory[]>;
  @Select(ProgramSelectors.getProgramTypes) programTypes$ : Observable<VwProgramType[]>;

  @Select(ProviderSelectors.getProviders) providers$: Observable<VwProvider[]>;

  @Select(LookupSelectors.getLookups) sortOption$: Observable<VwPmpLookup[]>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  programs$: Observable<any>;
  dataSource: MatTableDataSource<VwProgram>;

  providerId: number = null;
  cipSubSeriesCode: string = null;
  keyword: string=null;
  providers: VwAlbertaPsiprovider[];
  specializations: VwSpecialization[];
  providerLogos: VwProviderLogo[];
  searchResults: VwProgram[];
  programCosts: VwProgramCost[];
  programByCategoryList: VwPmpPsiprogramByCategoryList[];

  sortOption: string;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
   }
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();

    this.route.queryParams.subscribe((params) => {
      if (params['provider']) {
        this.providerId = params['provider'];
      }
      if (params['cipSubSeriesCode']) {
        this.cipSubSeriesCode = params['cipSubSeriesCode'];
      }
      if (params['keywords']) {
        this.keyword = params['keywords'];
      }
    });
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  getProvider(program: VwProgram): Observable<VwProvider> {
    return this.store.select(ProviderSelectors.getProvider(program.providerId));
  }

  getProviderLogo(program: VwProgram): Observable<VwProviderLogo> {
    return this.store.select(ProviderSelectors.getProviderLogo(program.providerId));
  }

  getSpecialization(program: VwProgram): Observable<VwSpecialization> {
    return this.store.select(ProgramSelectors.getProgramSpecialization(program.programId));
  }

  getProgramCost(program: VwProgram): Observable<VwProgramCost> {
    return this.store.select(ProgramSelectors.getProgramCost(program.programId));
  }

  getProgramType(program: VwProgram): Observable<VwProgramType> {
    return this.store.select(ProgramSelectors.getProgramType(program.programTypeId));
  }
}
