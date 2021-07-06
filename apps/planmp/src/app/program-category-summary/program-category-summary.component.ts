import { Component, Input } from '@angular/core';
import { FlexConstants } from '@libs/FlexConstants';
import { ProgramDto, PsiSpecializationCountByCategoryDto } from '@libs/common/models';

@Component({
  selector: 'aedigital-program-category-summary',
  templateUrl: './program-category-summary.component.html',
  styleUrls: ['./program-category-summary.component.scss'],
})
export class ProgramCategorySummaryComponent {
  FlexConstants = FlexConstants;

  @Input() programCountByCategory: PsiSpecializationCountByCategoryDto;
  programs: ProgramDto[];
}
