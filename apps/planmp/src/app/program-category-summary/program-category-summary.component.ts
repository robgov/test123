import { Component, OnInit, Input } from '@angular/core';
import { FlexConstants } from '@libs/FlexConstants';
import { ProgramService } from '@libs/common/services';
import { VwSpecialization, VwProgram, ProgramsRequest, VwSpecializationPrograms, VwPmpPsiprogramCountByCategory } from '@libs/common/models';

@Component({
  selector: 'aedigital-program-category-summary',
  templateUrl: './program-category-summary.component.html',
  styleUrls: ['./program-category-summary.component.scss']
})
export class ProgramCategorySummaryComponent implements OnInit {
  constructor() {}

  FlexConstants = FlexConstants;

  @Input() programCountByCategory: VwPmpPsiprogramCountByCategory;
  programs: VwProgram[];

  ngOnInit(): void {
    
  }

  // programCount(): number {
  //   if (this.specializationPrograms) {
  //     return this.specializationPrograms.filter((specProgram)=>specProgram.cipSubSeriesCode == this.specialization.cipSubSeriesCode)[0].programs.length;
  //   }
  //   return -1;
  // }
}
