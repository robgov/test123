import { Component, OnInit, Input } from '@angular/core';
import { VwProgram, VwProvider, VwSpecialization } from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';
import { ProgramsSearchResultsComponent } from '@planmp/programs-search-results/programs-search-results.component';
import { SpecializationService, ProviderLogoService } from '@libs/common/services';
import { SpecializationRequest, VwProviderLogo, ProviderLogoRequest } from '@libs/common/models';

@Component({
  selector: 'aedigital-program-summary',
  templateUrl: './program-summary.component.html',
  styleUrls: ['./program-summary.component.scss'],
})
export class ProgramSummaryComponent implements OnInit {
  FlexConstants = FlexConstants;
  @Input() program: VwProgram;
  @Input() providers: VwProvider[];
  specialization: VwSpecialization;
  providerLogo: VwProviderLogo;
  constructor(private specializationService: SpecializationService, private providerLogoService: ProviderLogoService) {}

  ngOnInit(): void {
    this.specializationService
      .getSpecializationByProgramId(
        new SpecializationRequest({ programId: this.program.programId })
      )
      .subscribe((result) => {
        this.specialization = result;
      });

    this.providerLogoService.getProviderLogoByProviderId(new ProviderLogoRequest({providerId: this.program.providerId }) ).subscribe((result)=>{
      this.providerLogo = result;
    })
  }

  // This seems like a dumb way to do this, improve.
  programProvider(): VwProvider {
    return this.providers.filter(
      (provider) => provider.providerId == this.program.providerId
    )[0];
  }
}
