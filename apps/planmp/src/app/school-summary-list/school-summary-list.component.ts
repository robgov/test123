import { Component, OnInit } from '@angular/core';
import { ProgramsRequest, VwAlbertaPsiprovider, VwProgram } from '@libs/common/models';
import { AlbertaPSIProviderService, ProgramService } from '@libs/common/services';

@Component({
  selector: 'aedigital-school-summary-list',
  templateUrl: './school-summary-list.component.html',
  styleUrls: ['./school-summary-list.component.scss']
})
export class SchoolSummaryListComponent implements OnInit {
  constructor(private apsiProviderService: AlbertaPSIProviderService, private programService: ProgramService) {}

  providers: VwAlbertaPsiprovider[];
  programs: VwProgram[];

  ngOnInit(): void {
    this.loadProviders();
    this.loadPrograms();
  }

  loadPrograms() {
    this.programService.getPrograms(new ProgramsRequest()).subscribe( (result)=> {
      this.programs = result
    });
  }

  loadProviders() {
    this.apsiProviderService.getAlbertaPsiProviders().subscribe((result) => {
      this.providers = result;
    });
  }
}
