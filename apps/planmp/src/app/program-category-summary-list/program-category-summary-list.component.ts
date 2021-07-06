import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select } from '@ngxs/store';
import { PsiSpecializationCountByCategoryDto } from '@libs/common/models';
import { ProgramSelectors } from '@libs/common/store/program';
import { Observable } from 'rxjs';

@Component({
  selector: 'aedigital-program-category-summary-list',
  templateUrl: './program-category-summary-list.component.html',
  styleUrls: ['./program-category-summary-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramCategorySummaryListComponent {
  @Select(ProgramSelectors.getProgramCategoryCounts)
  programCountsByCategory$: Observable<PsiSpecializationCountByCategoryDto[]>;
}
