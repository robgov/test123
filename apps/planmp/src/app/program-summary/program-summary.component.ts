import { Component, Input,ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import {
  ProgramSelectors, ProgramActions,
} from '@libs/common/store/store-index';
import {
  ProgramSummaryDto,
} from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';

@Component({
  selector: 'aedigital-program-summary',
  templateUrl: './program-summary.component.html',
  styleUrls: ['./program-summary.component.scss'],
})
export class ProgramSummaryComponent {
  FlexConstants = FlexConstants;

  @Select(ProgramSelectors.getSelectedProgram) SelectedProgram$: Observable<ProgramSummaryDto>;


}
