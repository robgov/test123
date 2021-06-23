import { Component, Input } from '@angular/core';
import { VwProgram, VwProvider, VwSpecialization, VwProviderLogo, VwProgramCost, VwSpecializationPrograms, VwProgramType } from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';

@Component({
  selector: 'aedigital-program-summary',
  templateUrl: './program-summary.component.html',
  styleUrls: ['./program-summary.component.scss'],
})
export class ProgramSummaryComponent {
  FlexConstants = FlexConstants;
  @Input() program: VwProgram;
  @Input() programProvider: VwProvider;
  @Input() programSpecialization: VwSpecialization;
  @Input() programCost: VwProgramCost;
  @Input() providerLogo: VwProviderLogo;
  @Input() programType: VwProgramType;
  
  currentProvider: VwProvider;
  currentLogo: VwProviderLogo;
  currentCost = "XXXXX";
  currentSpecialization: string;

  getProgramCost(): string {
    if (!this.programCost) return "";
    return (this.programCost.tuition + this.programCost.books + this.programCost.other).toString();
  }

  getLogoUrl(): string {
    if (!this.providerLogo) return "";
    return this.providerLogo.logoUrl;
  }

  getProgramProviderName(): string {
    if (!this.currentProvider) return "";
    return this.currentProvider.providerName;
  }

  getProgramType(): string {
    if (!this.programType) return ""
    return this.programType.programType;
  }
}
