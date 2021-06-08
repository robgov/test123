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
  ProgramCostsRequest,
  VwPmpPsiprogramByCategoryList,
  VwProvider,
} from '@libs/common/models';
import {
  ProgramService,
  AlbertaPSIProviderService,
  SpecializationService,
  ProviderLogoService,
  ProgramCostService,
} from '@libs/common/services';
import { FlexConstants } from '@libs/FlexConstants';
import { forkJoin, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'aedigital-programs-search-results',
  templateUrl: './programs-search-results.component.html',
  styleUrls: ['./programs-search-results.component.scss'],
})
export class ProgramsSearchResultsComponent implements OnInit, OnDestroy {
  FlexConstants = FlexConstants;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<VwProgram>;

  private providerId: number = null;
  private cipSubSeriesCode: string = null;
  providers: VwAlbertaPsiprovider[];
  specializations: VwSpecialization[];
  providerLogos: VwProviderLogo[];
  searchResults: VwProgram[];
  programCosts: VwProgramCost[];
  programByCategoryList: VwPmpPsiprogramByCategoryList[];

  sortOption: string;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService,
    private apsiProviderService: AlbertaPSIProviderService,
    private changeDetectorRef: ChangeDetectorRef,
    private specializationService: SpecializationService,
    private providerLogoService: ProviderLogoService,
    private programCostService: ProgramCostService
  ) {}
  ngOnInit(): void {
    this.loadCipProgramIds();
    this.loadProviders();
    this.loadProgramCosts();
    this.loadSpecializations();
    this.loadProviderLogos();
    this.changeDetectorRef.detectChanges();

    this.route.queryParams.subscribe((params) => {
      if (params['provider']) {
        this.providerId = params['provider'];
      }
      if (params['cipSubSeriesCode']) {
        this.cipSubSeriesCode = params['cipSubSeriesCode'];
      }

      this.loadPrograms(this.providerId, this.cipSubSeriesCode);
    });
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  loadProviders() {
    return this.apsiProviderService.getAlbertaPsiProviders().subscribe((result) => {
      this.providers = result;
    });
  }

  loadProviderLogos() {
    this.providerLogoService.getProviderLogos().subscribe((result) => {
      this.providerLogos = result;
    });
  }

  loadProgramCosts() {
    this.programCostService
      .getProgramCosts(new ProgramCostsRequest())
      .subscribe((result) => {
        this.programCosts = result;
      });
  }

  loadSpecializations() {
    this.specializationService.getSpecializations().subscribe((result) => {
      this.specializations = result;
    });
  }

  loadCipProgramIds() {
    return this.programService.getProgramIdsByCategory().subscribe((result) => {
      this.programByCategoryList = result;
    });
  }

  getProvider(program: VwProgram): VwProvider {
    return this.providers.filter(
      (provider) => provider.providerId == program.providerId
    )[0];
  }

  getSpecialization(program: VwProgram): VwSpecialization {
    if (this.specializations) {
      return this.specializations.filter(
        (specialization) => specialization.programId == program.programId
      )[0];
    }
    return new VwSpecialization();
  }

  getProgramCost(program: VwProgram): VwProgramCost {
    return this.programCosts.filter(
      (costs) => costs.programId == program.programId
    )[0];
  }

  getProviderLogo(program: VwProgram): VwProviderLogo {
    if (
      this.providerLogos.filter((logo) => logo.providerId == program.providerId)
    ) {
      return this.providerLogos.filter(
        (logo) => logo.providerId == program.providerId
      )[0];
    }
    return null;
  }

  loadPrograms(providerId: number, cipSubSeriesCode) {
    // return this.programService.getProgramIdsByCategory().subscribe((result) => {
    //   this.programByCategoryList = result;
      this.programService
      .getPrograms(new ProgramsRequest())
      .subscribe((result) => {
        this.searchResults = result;
        this.dataSource = new MatTableDataSource<VwProgram>(this.searchResults);
        this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
        this.dataSource.filterPredicate = programFilterPredicate;
        this.filterPrograms(providerId, cipSubSeriesCode);
      });
    //});
  }

  filterPrograms(providerId: number, cipSubSeriesCode: string) {
    var selectedFilters = { providerId:[], programId:[] };

    if (providerId > 0) {
      selectedFilters.providerId.push(+providerId);
    }
    if (cipSubSeriesCode) {
      const programIds = this.programByCategoryList.filter(pc=> pc.cipSubSeriesCode==cipSubSeriesCode).map(pc=>pc.programId)
      selectedFilters.programId=programIds;
    }
    //TODO: Keyword search
    
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
