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
    if (a.sort < b.sort) {
      return -1;
    }
    if (a.sort > b.sort) {
      return 1;
    }
    return 0;
  }

  getSmallCardSections() {
    var results =  this.content.sections.filter(s=>s.type==='smallcard');
    return results;
  }
}
