import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VwAlbertaPsiprovider, VwProgram, ProviderProgramRequest, VwSpecialization, VwProviderLogo } from '@libs/common/models';
import { ProgramService, AlbertaPSIProviderService, SpecializationService, ProviderLogoService } from '@libs/common/services';
import { FlexConstants } from '@libs/FlexConstants';
import { Observable } from 'rxjs';

@Component({
  selector: 'aedigital-programs-search-results',
  templateUrl: './programs-search-results.component.html',
  styleUrls: ['./programs-search-results.component.scss']
})
export class ProgramsSearchResultsComponent implements OnInit, OnDestroy {
  FlexConstants = FlexConstants;

  // From Example
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>
  dataSource: MatTableDataSource<VwProgram>;
  // End Example declaration

  private providerId: number = null;
  providers: VwAlbertaPsiprovider[];
  specializations: VwSpecialization[];
  providerLogos: VwProviderLogo[];
  searchResults: VwProgram[];

  constructor(private route: ActivatedRoute,
              private programService: ProgramService,
              private apsiProviderService: AlbertaPSIProviderService,
              private changeDetectorRef: ChangeDetectorRef,
              private specializationService: SpecializationService, 
              private providerLogoService: ProviderLogoService) { }
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();

    this.route.queryParams.subscribe(params => {
      if (params['provider']) {
        this.providerId = params['provider'];
        this.loadProviderPrograms(this.providerId);
      }
    });

    this.loadProviders();
    this.loadSpecializations();
    this.loadProviderLogos();

  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  loadProviders() {
    this.apsiProviderService.getAlbertaPsiProviders().subscribe((result) => {
      this.providers = result;
    });
  }

  loadProviderLogos() {
    this.providerLogoService.getProviderLogos().subscribe((result)=> {
      this.providerLogos = result;
    })
  }

  loadSpecializations() {
    this.specializationService.getSpecializations().subscribe((result) => {
      this.specializations = result;
    });
  }

  loadProviderPrograms(providerId: number) {
    this.programService.getProgramsByProviderId(new ProviderProgramRequest({"providerId":providerId}) ).subscribe((result) => {
      // Stubbed in a basic sort
      this.searchResults = result.sort((obj1, obj2)=> {
        if (obj1.programName > obj2.programName){
          return 1;
        }
        if (obj1.programName < obj2.programName){ 
          return -1;
        }
        return 0;
      });
      this.dataSource = new MatTableDataSource<VwProgram>(this.searchResults);
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    });
  }

}
