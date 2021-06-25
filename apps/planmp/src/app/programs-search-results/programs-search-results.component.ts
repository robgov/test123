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
  VwPmpLookup,
  VwSpecializationCost,
  VwAbpostalCode,
  ProgramSummaryDto,
  VwProviderWebsite,
  VwProviderAddress,
} from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import {
  LookupSelectors,
  ProgramActions,
  ProgramSelectors,
  ProviderSelectors,
} from '@libs/common/store/store-index';

@Component({
  selector: 'aedigital-programs-search-results',
  templateUrl: './programs-search-results.component.html',
  styleUrls: ['./programs-search-results.component.scss'],
})
export class ProgramsSearchResultsComponent implements OnInit, OnDestroy {
  FlexConstants = FlexConstants;

  @Select(ProgramSelectors.getProgramSpecializations) programSpecializations$: Observable<VwSpecialization[]>;

  @Select(ProgramSelectors.getCategoryPrograms) categoryPrograms$: Observable<VwSpecialization[]>;
  @Select(ProgramSelectors.getProgramCredentials) programCredentials$: Observable<VwProgramCredential[]>;
  @Select(ProgramSelectors.getFilteredPrograms) filteredPrograms$: Observable<ProgramSummaryDto[]>;
  @Select(ProgramSelectors.getProgramCategoryCounts) programCountsByCategory$: Observable<VwPmpPsiprogramCountByCategory[]>;
  @Select(ProgramSelectors.getProgramTypes) programTypes$: Observable<VwProgramType[]>;

  @Select(ProgramSelectors.getSelectedProviders) selectedProviderIds$: Observable<number[]>
  @Select(ProgramSelectors.getSelectedCredentials) selectedCredentialIds$: Observable<number[]>

  @Select(ProviderSelectors.getProviders) providers$: Observable<VwProvider[]>;
  @Select(LookupSelectors.getLookups) sortOption$: Observable<VwPmpLookup[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  programs$: Observable<any>;
  dataSource: MatTableDataSource<VwProgram>;

  providerId: number = null;
  cipSubSeriesCode: string = null;
  keyword: string = null;

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
    private changeDetectorRef: ChangeDetectorRef
  ) {
    store.dispatch(new ProgramActions.GetPrograms());

  }
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();

    this.route.queryParams.subscribe((params) => {
      if (params['provider']) {
        this.providerId = params['provider'];
        var providers = new Array<number>();
        providers.push(+this.providerId);
        this.store.dispatch(
          new ProgramActions.SetProgramSearchProviderFilter(providers)
        );
      }
      if (params['cipSubSeriesCode']) {
        this.cipSubSeriesCode = params['cipSubSeriesCode'];
        this.store.dispatch(
          new ProgramActions.SetProgramSearchCategoryFilter(
            this.cipSubSeriesCode
          )
        );
      } else {
        this.store.dispatch(
          new ProgramActions.SetProgramSearchCategoryFilter('')
        );
      }

      if (params['postalcode']){
        const postalCode = params['postalcode'];
        this.store.dispatch(new ProgramActions.SetProgramSearchPostalCodeFilter(postalCode));
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
    // if (
    //   !this.store.selectSnapshot(
    //     ProgramSelectors.getSpecializationCostsForProvider(program.programId)
    //   )
    // ) {
    //   this.store.dispatch(
    //     new ProgramActions.GetSpecializationCostsForProvider(program.providerId)
    //   );
    // }
    return this.store.select(ProviderSelectors.getProvider(program.providerId));
  }

  getProviderLogo(program: VwProgram): Observable<VwProviderLogo> {
    return this.store.select(
      ProviderSelectors.getProviderLogo(program.providerId)
    );
  }

  getSpecialization(program: VwProgram): Observable<VwSpecialization> {
    return this.store.select(
      ProgramSelectors.getProgramSpecialization(program.programId)
    );
  }

  getProgramCost(program: VwProgram): Observable<VwProgramCost> {
    return this.store.select(
      ProgramSelectors.getProgramCost(program.programId)
    );
  }

  getProgramType(program: VwProgram): Observable<VwProgramType> {
    return this.store.select(
      ProgramSelectors.getProgramType(program.programTypeId)
    );
  }

  // getDistanceToProvider(program:VwProgram): Observable<number> {
  //   return this.store.select(
  //     ProviderSelectors.getDistanceToProvider(program.providerId));
  // }

  getSpecializationCosts(
    program: VwProgram
  ): Observable<VwSpecializationCost[]> {
    if (program && program.programId) {
      return this.store.select(
        ProgramSelectors.getSpecializationCostForProgram(program.programId)
      );
    }
  }
  getProviderWebsite(program: VwProgram): Observable<VwProviderWebsite> {
    return this.store.select(ProviderSelectors.getProviderWebsite(program.providerId));
  }
  getProviderAddress(program: VwProgram): Observable<VwProviderAddress> {
    return this.store.select(ProviderSelectors.getProviderAddress(program.providerId));
  }
  getProgramCredential(program: VwProgram): Observable<VwProgramCredential>{
    return this.store.select(ProgramSelectors.getProgramCredential(program.programCredentialId));
  }
}
