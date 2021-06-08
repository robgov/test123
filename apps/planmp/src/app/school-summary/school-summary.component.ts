import { Component, Input } from '@angular/core';
import { VwAlbertaPsiprovider, VwProgram } from '@libs/common/models';
import { ProgramService } from '@libs/common/services';

@Component({
  selector: 'aedigital-school-summary',
  templateUrl: './school-summary.component.html',
  styleUrls: ['./school-summary.component.scss'],
})
export class SchoolSummaryComponent {
  constructor(private programService: ProgramService) {}

  @Input() provider: VwAlbertaPsiprovider;
  @Input() programs: VwProgram[];
  providerPrograms: VwProgram[];
  currentProgramCount: string;
 
  programCount()  {
    if (this.programs) {
      if (! this.currentProgramCount) {
        this.currentProgramCount =  this.programs.filter((program) => program.providerId == this.provider.providerId).length.toString();
      }
      return this.currentProgramCount;
    }
    return '';
  }
}
