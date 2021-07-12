import { Component, OnInit, Input } from '@angular/core';
import { ProgramSummaryDto } from '@libs/common/models';

@Component({
  selector: 'aedigital-strapi-content-small-card',
  templateUrl: './strapi-content.small-card.component.html',
  styleUrls: ['./strapi-content.small-card.component.scss'],
})
export class StrapiContentSmallCardComponent {
  @Input() section: any;
  @Input() programSummary: ProgramSummaryDto;

  getValue(){
    switch (this.section.subtype) {
      case 'annualmedianincome':
        return this.programSummary.medianIncome;
        break;
      case 'averageemploymentrate':
        return this.programSummary.employmentRate;
        break;
      case 'jobrelatednessrate':
        return '97.4%'
        break;
      case 'timetofullemployment':
        return '3.0'
        break;
      default:
        return '';
    }
  }
}
