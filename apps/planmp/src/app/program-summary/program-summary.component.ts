import { Component, Input } from '@angular/core';
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

  currentProvider: ProviderDto;
  currentLogo: ProviderLogoDto;
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
