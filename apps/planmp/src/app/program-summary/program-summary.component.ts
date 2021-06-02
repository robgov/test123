import { Component, OnInit, Input } from '@angular/core';
import { VwProgram, VwProvider } from '@libs/common/models';
import { ProgramsSearchResultsComponent } from '@planmp/programs-search-results/programs-search-results.component';

@Component({
  selector: 'aedigital-program-summary',
  templateUrl: './program-summary.component.html',
  styleUrls: ['./program-summary.component.scss']
})
export class ProgramSummaryComponent implements OnInit {
  @Input() program: VwProgram;
  @Input() providers: VwProvider[];
  constructor() { }

  ngOnInit(): void {
  }

  // This seems like a dumb way to do this, improve.
  programProvider(): VwProvider { 
    return this.providers.filter(provider=> provider.providerId == this.program.providerId)[0];
  }

}
