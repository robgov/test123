import { Component, Input } from '@angular/core';
import {
  VwProgram,
  VwProvider,
  VwSpecialization,
  VwProviderLogo,
  VwProgramType,
  VwSpecializationCost,
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
  @Input() program: VwProgram;
  @Input() programProvider: VwProvider;
  @Input() programSpecialization: VwSpecialization;
  @Input() specializationCosts: VwSpecializationCost[];
  @Input() providerLogo: VwProviderLogo;
  @Input() programType: VwProgramType;
  @Input() distance: number;

  currentProvider: VwProvider;
  currentLogo: VwProviderLogo;
  currentCost = 'XXXXX';
  currentSpecialization: string;

  getSpecializationCost(): string {
    if (!this.specializationCosts) return '';
    var runningTotal = 0;
    var session: number;
    this.specializationCosts.forEach((specCost) => {
      if (!session) {
        session = specCost.sessionOfStudyId;
      }
      if (session == specCost.sessionOfStudyId) {
        runningTotal += specCost.amount;
      }
    });
    return runningTotal.toString();
  }

  getLogoUrl(): string {
    if (!this.providerLogo) return '';
    return this.providerLogo.logoUrl;
  }

  getProgramProviderName(): string {
    if (!this.currentProvider) return '';
    return this.currentProvider.providerName;
  }

  getProgramType(): string {
    if (!this.programType) return '';
    return this.programType.programType;
  }
}
