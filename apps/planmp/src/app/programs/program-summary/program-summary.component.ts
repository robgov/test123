import { Component, Input,ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import {
  ProgramSelectors, ProgramActions, StrapiSelectors,
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
import { ActivatedRoute } from '@angular/router';

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
  @Select(StrapiSelectors.getProgramDetailData(1)) SelectedProgramDetailData$: Observable<any>;

  currentProvider: ProviderDto;
  currentLogo: ProviderLogoDto;
  currentCost = 'XXXXX';
  currentSpecialization: string;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['programId']) {
        this.store.dispatch(
          new ProgramActions.SetProgramIDSearchFilter(+params['programId'])
        );
      }
    });
  }

}
