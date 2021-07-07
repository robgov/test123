import { Component, Input,ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import {
  ProgramSelectors, ProgramActions,
} from '@libs/common/store/store-index';
import {
  ProgramDto,
  ProviderDto,
  SpecializationDto,
  ProviderLogoDto,
  ProgramTypeDto,
  SpecializationCostDto,
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
  @Input() programSummary: ProgramSummaryDto;
  @Input() program: ProgramDto;
  @Input() programProvider: ProviderDto;
  @Input() programSpecialization: SpecializationDto;
  @Input() specializationCosts: SpecializationCostDto[];
  @Input() providerLogo: ProviderLogoDto;
  @Input() programType: ProgramTypeDto;
  @Input() distance: number;
  @Select(ProgramSelectors.getSelectedProgram) SelectedProgram$: Observable<ProgramSummaryDto>;

  currentProvider: ProviderDto;
  currentLogo: ProviderLogoDto;
  currentCost = 'XXXXX';
  currentSpecialization: string;


}
