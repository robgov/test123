import { Component, OnInit, Input } from '@angular/core';
import { VwProgram } from '@libs/common/models';

@Component({
  selector: 'aedigital-program-summary',
  templateUrl: './program-summary.component.html',
  styleUrls: ['./program-summary.component.scss']
})
export class ProgramSummaryComponent implements OnInit {
  @Input() program: VwProgram;
  constructor() { }

  ngOnInit(): void {
  }

}
