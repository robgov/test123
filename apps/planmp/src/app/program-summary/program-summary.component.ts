import { Component, Input } from '@angular/core';
import { VwProgram, VwProvider, VwSpecialization, VwProviderLogo, VwProgramCost, VwSpecializationPrograms } from '@libs/common/models';
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
  @Input() providerLogos: VwProviderLogo[];
  
  currentProvider: VwProvider;
  currentLogo: VwProviderLogo;
  currentCost = "XXXXX";
  currentSpecialization: string;

  // TODO: These are quick and dirty, refactor.

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
}
