import { Component, Input } from '@angular/core';
import { FlexConstants } from '@libs/FlexConstants';
import { VwProgram, VwPmpPsiprogramCountByCategory } from '@libs/common/models';

@Component({
  selector: 'aedigital-program-category-summary',
  templateUrl: './program-category-summary.component.html',
  styleUrls: ['./program-category-summary.component.scss'],
})
export class ProgramCategorySummaryComponent {
  FlexConstants = FlexConstants;

  @Input() programCountByCategory: VwPmpPsiprogramCountByCategory;
  programs: VwProgram[];
}
