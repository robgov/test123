import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramSummaryDto} from '@libs/common/models';
import { FlexConstants } from '@libs/FlexConstants';
import { Store } from '@ngxs/store';


@Component({
  selector: 'ae-program-summary-detail',
  templateUrl: './program-summary-detail.component.html',
  styleUrls: ['./program-summary-detail.component.scss']
})
export class ProgramSummaryDetailComponent implements OnInit {

  @Input() program: any;
  FlexConstants = FlexConstants;
  constructor(private router: Router, private store: Store) {}
  programName: number = 0;

  ngOnInit() {
    
  }

}
