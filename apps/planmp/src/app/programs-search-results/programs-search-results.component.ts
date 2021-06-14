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
  ProgramsRequest,
  VwSpecialization,
  VwProviderLogo,
  VwProgramCost,
  VwPmpPsiprogramByCategoryList,
  VwProvider
} from '@libs/common/models';
import {
  ProgramService,
  SpecializationService
} from '@libs/common/services';
import { FlexConstants } from '@libs/FlexConstants';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { ProgramSelectors } from '@libs/common/store/program';
import { map } from 'rxjs/operators';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';

@Component({
  selector: 'aedigital-programs-search-results',
  templateUrl: './programs-search-results.component.html',
  styleUrls: ['./programs-search-results.component.scss'],
})
export class ProgramsSearchResultsComponent implements OnInit, OnDestroy {
  FlexConstants = FlexConstants;

  @Select(ProgramSelectors.programSpecializations) programSpecializations$: Observable<VwSpecialization[]>;
  @Select(ProgramSelectors.getCategoryPrograms) categoryPrograms$: Observable<VwSpecialization[]>;
  @Select(ProgramSelectors.getProgramSearchFilters) programSearchFilters$: Observable<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  programs$: Observable<any>;
  dataSource: MatTableDataSource<VwProgram>;

  private providerId: number = null;
  private cipSubSeriesCode: string = null;
  private keyword: string=null;
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
    private programService: ProgramService,
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
      this.applyFilter();

      this.loadPrograms(this.providerId, this.cipSubSeriesCode, this.keyword);
    });
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  applyFilter(){
    this.store    
  }

  getProvider(program: VwProgram): Observable<VwProvider> {
    return this.store.select(ProgramSelectors.getProvider(program.providerId));
  }

  getProviderLogo(program: VwProgram): Observable<VwProviderLogo> {
    return this.store.select(ProgramSelectors.getProviderLogo(program.providerId));
  }

  getSpecialization(program: VwProgram): Observable<VwSpecialization> {
    return this.store.select(ProgramSelectors.getProgramSpecialization(program.programId));
  }

  getProgramCost(program: VwProgram): Observable<VwProgramCost> {
    return this.store.select(ProgramSelectors.getProgramCost(program.programId));
  }

  loadPrograms(providerId: number, cipSubSeriesCode, keyword: string) {
    this.programService
      .getPrograms(new ProgramsRequest())
      .subscribe((result) => {
        this.searchResults = result;
        this.dataSource = new MatTableDataSource<VwProgram>(this.searchResults);
        this.dataSource.paginator = this.paginator;
        this.programs$ = this.dataSource.connect();
        this.dataSource.filterPredicate = programFilterPredicate;
        this.filterPrograms(providerId, cipSubSeriesCode,keyword);
      });
  }

  filterPrograms(providerId: number, cipSubSeriesCode: string, keyword: string) {
    var selectedFilters = { providerId: [], programId: [], programName:""};

    if (providerId > 0) {
      selectedFilters.providerId.push(+providerId);
    }
    if (cipSubSeriesCode) {
        const categoryProgramIds = this.store.selectSnapshot(ProgramSelectors.getCategoryPrograms(this.cipSubSeriesCode));
    
        selectedFilters.programId = categoryProgramIds.map(specs=>specs.programId);
    }
    if (keyword) {
      selectedFilters.programName=keyword;
    }

    this.dataSource.filter = JSON.stringify(selectedFilters);
  }
}

export const programFilterPredicate = (
  data: VwProgram,
  jsonFilter: string
): boolean => {
  const criteria = JSON.parse(jsonFilter);
  if (!criteria) return true;

  return Object.keys(criteria).every((key) => {
    const criteriaValue = criteria[key];
    if (!criteriaValue) return true;

    const dataValue = data[key];
    return (
      dataValue === criteriaValue ||
      (typeof criteriaValue === 'string' &&
        dataValue &&
        dataValue
          .toString()
          .toLowerCase()
          .indexOf(criteriaValue.toLowerCase()) !== -1) ||
      (Array.isArray(criteriaValue) &&
        (criteriaValue.length === 0 ||
          criteriaValue.some((cv) => cv === dataValue)))
    );
  });
};
