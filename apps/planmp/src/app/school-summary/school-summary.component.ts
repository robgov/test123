import { Component, Input } from '@angular/core';
import { ProviderDto, ProgramDto } from '@libs/common/models';

@Component({
  selector: 'aedigital-school-summary',
  templateUrl: './school-summary.component.html',
  styleUrls: ['./school-summary.component.scss'],
})
export class SchoolSummaryComponent {
  constructor() {}

  @Input() provider: ProviderDto;
  @Input() programs: ProgramDto[];
}
