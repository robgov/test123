import { Component, OnInit, Input } from '@angular/core';
import { VwProgram, VwProvider, VwSpecialization, VwProviderLogo } from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';

@Component({
  selector: 'aedigital-program-summary',
  templateUrl: './program-summary.component.html',
  styleUrls: ['./program-summary.component.scss'],
})
export class ProgramSummaryComponent implements OnInit {
  FlexConstants = FlexConstants;
  @Input() program: VwProgram;
  @Input() providers: VwProvider[];
  @Input() specializations: VwSpecialization[];
  @Input() providerLogos: VwProviderLogo[];
  constructor() {}

  ngOnInit(): void {
    
  }

  // TODO: This is quick and dirty, refactor.
  programProvider(): VwProvider {
    if (!this.providers) return new VwProvider();
    return this.providers.filter(
      (provider) => provider.providerId == this.program.providerId
    )[0];
  }

  providerLogo(): VwProviderLogo {
    if (!this.providerLogos) return new VwProviderLogo();
    return this.providerLogos.filter(
      (logo) => logo.providerId == this.program.providerId
    )[0];
  }

  providerSpecialization() {
    if (!this.specializations) return '';
    var result = this.specializations.filter(
      (specialization) => specialization.programId == this.program.programId
    )[0];
    if (result) {
      return result.cipSubSeries;
    }
    return '';
  }
}
