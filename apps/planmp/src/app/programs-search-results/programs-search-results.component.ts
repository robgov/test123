import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VwAlbertaPsiprovider, VwProgram, ProgramsRequest, VwSpecialization, VwProviderLogo } from '@libs/common/models';
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>
  dataSource: MatTableDataSource<VwProgram>;

  private providerId: number = null;
  private cipSubSeriesCode: string= null;
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
      }
      if (params['cipSubSeriesCode']) {
        this.cipSubSeriesCode = params['cipSubSeriesCode'];
      }

      this.loadPrograms(this.providerId, this.cipSubSeriesCode);
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

  loadPrograms(providerId: number, cipSubSeriesCode) {
    this.programService.getPrograms(new ProgramsRequest({"providerId":providerId ?? 0, "cipSubSeriesCode":cipSubSeriesCode ?? ''}) ).subscribe((result) => {
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
