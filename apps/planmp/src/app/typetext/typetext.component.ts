import {Component, ChangeDetectionStrategy} from '@angular/core';
import { Select } from '@ngxs/store';
import {Observable} from 'rxjs';
import { ProgramSelectors, ProviderSelectors } from '@libs/common/store/store-index';
import { VwAlbertaPsiprovider, VwPmpPsispecializationCountByCategory } from '@libs/common/models';

@Component({
  selector: 'ae-typetext',
  templateUrl: './typetext.component.html',
  styleUrls: ['./typetext.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypetextComponent {
    @Select(ProviderSelectors.getProviders) programProviders$: Observable<VwAlbertaPsiprovider[]>
    @Select(ProgramSelectors.getProgramCategoryCounts) programCategoryCount$: Observable<VwPmpPsispecializationCountByCategory[]>   
}
