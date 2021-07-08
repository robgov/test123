import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-program-summary-detail-admission',
  templateUrl: './program-summary-detail-admission.component.html',
  styleUrls: ['./program-summary-detail-admission.component.scss']
})
export class ProgramSummaryDetailAdmissionComponent implements OnInit {

  @Input() content: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
