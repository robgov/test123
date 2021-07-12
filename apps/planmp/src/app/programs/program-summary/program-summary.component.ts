import { Component, Input,ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import {
  ProgramSelectors, ProgramActions, StrapiSelectors, ProviderSelectors,
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
  @Select(ProgramSelectors.getSelectedProgram) selectedProgram$: Observable<ProgramSummaryDto>;
  @Select(ProviderSelectors.getProviderPublications) providerPublications$: Observable<ProgramSummaryDto>;

  selectedProgramId: number;
  selectedProviderId: number;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['programId']) {
        this.selectedProgramId = +params['programId'];
        this.store.dispatch(
          new ProgramActions.SetProgramIDSearchFilter(+params['programId'])
        );
      }
    });
  }

  getProgramDetailData(){
    return this.store.select(StrapiSelectors.getProgramDetailData(this.selectedProgramId));
  }
}
