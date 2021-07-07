import { Component, OnInit, Input } from '@angular/core';
import { FlexConstants } from '@libs/FlexConstants';
import { Store } from '@ngxs/store';
import { StrapiSelectors } from '@libs/common/store';

@Component({
  selector: 'aedigital-loanstart',
  templateUrl: './loanstart.component.html',
  styleUrls: ['./loanstart.component.scss'],
})
export class LoanstartComponent {
  @Input() loanData: Object[];

  FlexConstants = FlexConstants;
  
  constructor(public store:Store) { }

  getLoanApplyUrl() {
    if (this.loanData) {
      return this.store.selectSnapshot(StrapiSelectors.getLoanDataImageUrl(this.loanData[0]));
    }
    return '';
  }
}
