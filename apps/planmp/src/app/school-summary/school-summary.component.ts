import { Component, OnInit, Input } from '@angular/core';
import { VwAlbertaPsiprovider, VwProgram, ProviderProgramRequest } from '@libs/common/models';
import { ProgramService } from '@libs/common/services';

@Component({
  selector: 'aedigital-school-summary',
  templateUrl: './school-summary.component.html',
  styleUrls: ['./school-summary.component.scss'],
})
export class SchoolSummaryComponent implements OnInit {
  constructor(private programService: ProgramService) {}

  @Input() provider: VwAlbertaPsiprovider;
  programCount = 0;
  providerPrograms: VwProgram[];

  ngOnInit(): void {
    this.loadProviderPrograms(this.provider.providerId);
  }
 
  loadProviderPrograms(providerId: number) {
    this.programService.getProgramsByProviderId(new ProviderProgramRequest({"providerId":providerId}) ).subscribe((result) => {
      this.providerPrograms = result;
    });
  }
}
