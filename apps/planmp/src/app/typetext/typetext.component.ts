import {Component, ChangeDetectionStrategy} from '@angular/core';
import { Select } from '@ngxs/store';
import {Observable} from 'rxjs';
import { ProgramSelectors } from '@libs/common/store/program';
import { VwAlbertaPsiprovider, VwPmpPsispecializationCountByCategory } from '@libs/common/models';

@Component({
  selector: 'ae-typetext',
  templateUrl: './typetext.component.html',
  styleUrls: ['./typetext.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypetextComponent {
    @Select(ProgramSelectors.programProviders) programProviders$: Observable<VwAlbertaPsiprovider[]>
    @Select(ProgramSelectors.programCategoryCounts) programCategoryCount$: Observable<VwPmpPsispecializationCountByCategory[]>   
}
