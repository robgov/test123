import {
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ProviderDto,
  ProgramDto,
  SpecializationDto,
  ProviderLogoDto,
  ProgramCostDto,
  PsiSpecializationCountByCategoryDto,
  ProgramCredentialDto,
  ProgramTypeDto,
  LookupDto,
  SpecializationCostDto,
  ProgramSummaryDto,
  ProviderWebsiteDto,
  ProviderAddressDto,
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
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';
import { RouterSelectors } from '@libs/common/store';

@Component({
  selector: 'aedigital-programs-search-results',
  templateUrl: './programs-search-results.component.html',
  styleUrls: ['./programs-search-results.component.scss'],
})
export class ProgramsSearchResultsComponent implements OnInit {
  FlexConstants = FlexConstants;

  @Select(ProgramSelectors.getProgramSpecializations) programSpecializations$: Observable<SpecializationDto[]>;

  @Select(ProgramSelectors.getCategoryPrograms) categoryPrograms$: Observable<SpecializationDto[]>;
  @Select(ProgramSelectors.getProgramCredentials) programCredentials$: Observable<ProgramCredentialDto[]>;
  @Select(ProgramSelectors.getFilteredPrograms) filteredPrograms$: Observable<ProgramSummaryDto[]>;
  @Select(ProgramSelectors.getProgramCategoryCounts) programCountsByCategory$: Observable<PsiSpecializationCountByCategoryDto[]>;
  @Select(ProgramSelectors.getProgramTypes) programTypes$: Observable<ProgramTypeDto[]>;

  @Select(ProgramSelectors.getSelectedProviders) selectedProviderIds$: Observable<number[]>
  @Select(ProgramSelectors.getSelectedCredentials) selectedCredentialIds$: Observable<number[]>
  @Select(ProgramSelectors.getSelectedLocation) selectedPostalCode$: Observable<string>
  @Select(ProgramSelectors.getSelectedCipSubSeriesCode) selectedCipSubSeriesCode$: Observable<string>

  @Select(ProviderSelectors.getProviders) providers$: Observable<ProviderDto[]>;
  @Select(LookupSelectors.getLookupsForType("ProgramSort")) sortOption$: Observable<LookupDto[]>;
  @Select(LookupSelectors.getLookupsForType("DistanceFilter")) distanceFilterOptions$: Observable<LookupDto[]>;

  @SelectSnapshot(RouterSelectors.getRouteId) routeId: string;

  providerId: number = null;
  cipSubSeriesCode: string = null;
  keyword: string = null;

  providers: ProviderDto[];
  specializations: SpecializationDto[];
  providerLogos: ProviderLogoDto[];
  searchResults: ProgramDto[];
  programCosts: ProgramCostDto[];
  programByCategoryList: PsiSpecializationCountByCategoryDto[];


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
        this.store.dispatch(new ProgramActions.SetProgramSearchSortOrder("3")); //Closest
      }

      if (params['keywords']) {
        this.keyword = params['keywords'];
        this.store.dispatch(new ProgramActions.SetProgramSearchKeywordFilter(this.keyword));
      }
    });
  }

  getProvider(program: ProgramDto): Observable<ProviderDto> {
    return this.store.select(ProviderSelectors.getProvider(program.providerId));
  }

  getProviderLogo(program: ProgramDto): Observable<ProviderLogoDto> {
    return this.store.select(
      ProviderSelectors.getProviderLogo(program.providerId)
    );
  }

  getSpecialization(program: ProgramDto): Observable<SpecializationDto> {
    return this.store.select(
      ProgramSelectors.getProgramSpecialization(program.programId)
    );
  }

  getProgramCost(program: ProgramDto): Observable<ProgramCostDto> {
    return this.store.select(
      ProgramSelectors.getProgramCost(program.programId)
    );
  }

  getProgramType(program: ProgramDto): Observable<ProgramTypeDto> {
    return this.store.select(
      ProgramSelectors.getProgramType(program.programTypeId)
    );
  }

  getSpecializationCosts(
    program: ProgramDto
  ): Observable<SpecializationCostDto[]> {
    if (program && program.programId) {
      return this.store.select(
        ProgramSelectors.getSpecializationCostForProgram(program.programId)
      );
    }
  }
  getProviderWebsite(program: ProgramDto): Observable<ProviderWebsiteDto> {
    return this.store.select(ProviderSelectors.getProviderWebsite(program.providerId));
  }
  getProviderAddress(program: ProgramDto): Observable<ProviderAddressDto> {
    return this.store.select(ProviderSelectors.getProviderAddress(program.providerId));
  }
  getProgramCredential(program: ProgramDto): Observable<ProgramCredentialDto>{
    return this.store.select(ProgramSelectors.getProgramCredential(program.programCredentialId));
  }
}
