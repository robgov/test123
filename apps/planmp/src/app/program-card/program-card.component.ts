import { Component, Input } from '@angular/core';
import { VwProgram, VwProvider, VwSpecialization, VwProviderLogo, VwProgramCost, VwProviderAddress, VwProgramType, VwProviderWebsite, VwProgramCredential } from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';
import { format } from 'path';


@Component({
  selector: 'ae-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent {

  FlexConstants = FlexConstants;
  @Input() program: VwProgram;
  @Input() programProvider: VwProvider;
  @Input() programSpecialization: VwSpecialization;
  @Input() programCost: VwProgramCost;
  @Input() providerLogo: VwProviderLogo;
  @Input() programType: VwProgramType;
  @Input() providerWebsite: VwProviderWebsite;
  @Input() providerAddress: VwProviderAddress;
  @Input() programCredential: VwProgramCredential;
  
 

currencyformatter(f1):string
{
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(f1);
}


  getProgramCost(): string {

    var fees: number = 0;

    if (!this.programCost) return "n/a";
    return this.currencyformatter(fees);
  }

  getMedianIncome(): string {
    if (!this.program.programMedianIncome) return "n/a";
    return this.currencyformatter(this.program.programMedianIncome);
  }


  getEmploymentStat(): string {
    if (!this.program.programEmploymentStat) return "n/a";
    return (this.program.programEmploymentStat +"%").toString();
  }


  getLogoUrl(): string {
    if (!this.providerLogo) return "";
    return this.providerLogo.logoUrl;
  }
  getProviderLegalName(): string {
    if (!this.programProvider) return "School name not provided";
    return this.programProvider.providerLegalName;
  }

  getProgramProviderName(): string {
    if (!this.programProvider) return "N/A";
    return this.programProvider.providerName;
  }

  getProgramType(): string {
    if (!this.programType) return ""
    return this.programType.programType;
  }
  
  getProgramTermandCredential(): string {
    if (!this.program || !this.programCredential) return ""
    return this.program.programLength + " - " + this.programCredential.programCredential;
  }

  getProviderWebsite(): string {
    if (!this.providerWebsite) return ""
    return "http:\\\\" + this.providerWebsite.websiteUrl;
  }

  getProviderAddress(): string {
    if (!this.providerAddress) return ""
    return this.providerAddress.addressLine1 + "\n" +  this.providerAddress.addressLine2;
  }
  getProviderCityPostal(): string {
    if (!this.providerAddress) return ""
    return  this.providerAddress.city + ", " + this.providerAddress.postalZipCode;
  }

}
