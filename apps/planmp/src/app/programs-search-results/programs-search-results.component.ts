import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VwAlbertaPsiprovider, VwProgram, ProviderProgramRequest } from '@libs/common/models';
import { ProgramService } from '@libs/common/services';

@Component({
  selector: 'aedigital-programs-search-results',
  templateUrl: './programs-search-results.component.html',
  styleUrls: ['./programs-search-results.component.scss']
})
export class ProgramsSearchResultsComponent implements OnInit {

  private providerId: number = null;
  searchResults: VwProgram[];

  constructor(private route: ActivatedRoute,private programService: ProgramService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['provider']) {
        this.providerId = params['provider'];
        this.loadProviderPrograms(this.providerId);
      }

    });
  }

  loadProviderPrograms(providerId: number) {
    this.programService.getProgramsByProviderId(new ProviderProgramRequest({"providerId":providerId}) ).subscribe((result) => {
      this.searchResults = result;
    });
  }

}
