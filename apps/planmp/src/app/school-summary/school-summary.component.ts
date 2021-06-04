import { Component, OnInit, Input } from '@angular/core';
import { VwAlbertaPsiprovider, VwProgram, ProgramsRequest } from '@libs/common/models';
import { ProgramService } from '@libs/common/services';

@Component({
  selector: 'aedigital-school-summary',
  templateUrl: './school-summary.component.html',
  styleUrls: ['./school-summary.component.scss'],
})
export class SchoolSummaryComponent implements OnInit {
  constructor(private programService: ProgramService) {}

  @Input() provider: VwAlbertaPsiprovider;
  providerPrograms: VwProgram[];
  @Input() programs: VwProgram[];

  ngOnInit(): void {
    // this.loadProviderPrograms(this.provider.providerId);
  }
 
  programCount()  {
    if (this.programs) {
      return this.programs.filter((program) => program.providerId == this.provider.providerId).length;
    }
    return '';
  }

  loadProviderPrograms(providerId: number) {
    this.programService.getPrograms(new ProgramsRequest({"providerId":providerId}) ).subscribe((result) => {
      this.providerPrograms = result;
    });
  }
}
