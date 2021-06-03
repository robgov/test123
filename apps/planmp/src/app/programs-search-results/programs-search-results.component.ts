import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VwAlbertaPsiprovider, VwProgram, ProviderProgramRequest } from '@libs/common/models';
import { ProgramService, AlbertaPSIProviderService } from '@libs/common/services';
import { FlexConstants } from '@libs/FlexConstants';

@Component({
  selector: 'aedigital-programs-search-results',
  templateUrl: './programs-search-results.component.html',
  styleUrls: ['./programs-search-results.component.scss']
})
export class ProgramsSearchResultsComponent implements OnInit {
  FlexConstants = FlexConstants;

  private providerId: number = null;
  providers: VwAlbertaPsiprovider[];
  searchResults: VwProgram[];

  constructor(private route: ActivatedRoute,private programService: ProgramService, private apsiProviderService: AlbertaPSIProviderService) { }
  ngOnInit(): void {


    this.route.queryParams.subscribe(params => {
      if (params['provider']) {
        this.providerId = params['provider'];
        this.loadProviderPrograms(this.providerId);
      }
      // if parameters search
      // get all programs a
    });

    this.loadProviders();
  }

  loadProviders() {
    this.apsiProviderService.getAlbertaPsiProviders().subscribe((result) => {
      this.providers = result;
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
    });
  }

}
