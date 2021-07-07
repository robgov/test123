import { Component, Input } from '@angular/core';
import { SpecializationDto, ProgramSummaryDto } from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';

@Component({
  selector: 'ae-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
})
export class ProgramCardComponent {
  FlexConstants = FlexConstants;
  @Input() programSummary: ProgramSummaryDto;
  @Input() programSpecialization: SpecializationDto;

  currencyformatter(f1): string {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(f1);
  }

  getProgramCost(): string {
    var fees: number = 0;

    if (!this.programSummary.firstYearCost) return 'n/a';
    return this.currencyformatter(fees);
  }

  getProgramProviderName(): string {
    return this.programSummary.providerName;
  }

  getProgramType(): string {
    return this.programSummary.programType;
  }

  getProgramTermandCredential(): string {
    if (!this.programSummary.programCredential) return '';
    return (
      this.programSummary.programLength +
      ' - ' +
      this.programSummary.programCredential
    );
  }

  getProviderWebsite(): string {
    if (!this.programSummary.websiteUrl) return '';
    return 'http:\\\\' + this.programSummary.websiteUrl;
  }

  getProviderAddress(): string {
    return (
      this.programSummary.addressLine1 + '\n' + this.programSummary.addressLine2
    );
  }
}
