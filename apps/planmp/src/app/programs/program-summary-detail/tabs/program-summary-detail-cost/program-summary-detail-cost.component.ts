import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-program-summary-detail-cost',
  templateUrl: './program-summary-detail-cost.component.html',
  styleUrls: ['./program-summary-detail-cost.component.scss']
})
export class ProgramSummaryDetailCostComponent implements OnInit {
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
