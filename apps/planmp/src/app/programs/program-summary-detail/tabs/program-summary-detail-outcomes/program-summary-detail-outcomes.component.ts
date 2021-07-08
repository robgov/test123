import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-program-summary-detail-outcomes',
  templateUrl: './program-summary-detail-outcomes.component.html',
  styleUrls: ['./program-summary-detail-outcomes.component.scss']
})
export class ProgramSummaryDetailOutcomesComponent implements OnInit {
  @Input() content: any;
  constructor() { }

  ngOnInit(): void {
  }

  sortContent(a, b) {
    if (a.displayOrder < b.displayOrder) {
      return -1;
    }
    if (a.displayOrder > b.displayOrder) {
      return 1;
    }
    return 0;
  }
}
