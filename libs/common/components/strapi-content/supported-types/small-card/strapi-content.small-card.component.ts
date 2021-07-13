import { Component, OnInit, Input } from '@angular/core';
import { ProgramSummaryDto } from '@libs/common/models';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'aedigital-strapi-content-small-card',
  templateUrl: './strapi-content.small-card.component.html',
  styleUrls: ['./strapi-content.small-card.component.scss'],
})
export class StrapiContentSmallCardComponent {
  constructor(private cp: CurrencyPipe, private pp: PercentPipe) {}

  @Input() section: any;
  @Input() programSummary: ProgramSummaryDto;

  getValue(){
    switch (this.section.subtype) {
      case 'annualmedianincome':
        return  this.cp.transform(this.programSummary.medianIncome);
        break;
      case 'averageemploymentrate':
        return this.pp.transform(this.programSummary.employmentRate/1000,'1.1-1');
        break;
      case 'jobrelatednessrate':
        return this.pp.transform(.973,'2.1-1');
        break;
      case 'timetofullemployment':
        return '3.0'
        break;
      default:
        return '';
    }
  }
}
