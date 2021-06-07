import { Component, Input } from '@angular/core';
import { VwProgram, VwProvider, VwSpecialization, VwProviderLogo, VwProgramCost } from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';

@Component({
  selector: 'aedigital-program-summary',
  templateUrl: './program-summary.component.html',
  styleUrls: ['./program-summary.component.scss'],
})
export class ProgramSummaryComponent {
  FlexConstants = FlexConstants;
  @Input() program: VwProgram;
  @Input() providers: VwProvider[];
  @Input() specializations: VwSpecialization[];
  @Input() providerLogos: VwProviderLogo[];
  @Input() programCosts: VwProgramCost[];
  
  currentProvider: VwProvider;
  currentLogo: VwProviderLogo;
  currentCost = "XXXXX";
  currentSpecialization: string;

  // TODO: These are quick and dirty, refactor.
  programProvider(): VwProvider {
    if (!this.providers) return new VwProvider();
    if (!this.currentProvider) {
      this.currentProvider = this.providers.filter(
        (provider) => provider.providerId == this.program.providerId
      )[0];
    }
    return this.currentProvider;
  }

  providerLogo(): VwProviderLogo {
    if (!this.providerLogos) return new VwProviderLogo();
    if (!this.currentLogo) {
      this.currentLogo = this.providerLogos.filter(
        (logo) => logo.providerId == this.program.providerId
      )[0];
    }
    return this.currentLogo;
  }

  programCost(): string {
    if (!this.programCosts) return "";
    if (!this.currentCost) {
      const costs = this.programCosts.filter( (pc)=>pc.programId==this.program.programId)[0];
      if (costs) {
        this.currentCost = (costs.tuition + costs.books + costs.other).toString();
      }
    }
    return this.currentCost;
  }

  providerSpecialization() {
    if (!this.specializations) return '';
    if (!this.currentSpecialization) {
      const result = this.specializations.filter(
        (specialization) => specialization.programId == this.program.programId
      )[0];
      if (result) {
        this.currentSpecialization = result.cipSubSeries;
      }
    }
    return this.currentSpecialization;
  }
}
