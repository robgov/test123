import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-program-summary-detail-occupations',
  templateUrl: './program-summary-detail-occupations.component.html',
  styleUrls: ['./program-summary-detail-occupations.component.scss']
})
export class ProgramSummaryDetailOccupationsComponent implements OnInit {
  @Input() content: any;
  constructor() { }

  ngOnInit(): void {
  }

  sortContent(a, b) {
    if (a.sort < b.sort) {
      return -1;
    }
    if (a.sort > b.sort) {
      return 1;
    }
    return 0;
  }
}
