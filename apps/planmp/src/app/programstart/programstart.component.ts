import { Component, Input } from '@angular/core';
import { FlexConstants } from '@libs/FlexConstants';
import { ProgramTypeDto } from '@libs/common/models';
import { Store } from '@ngxs/store';
import { StrapiSelectors } from '@libs/common/store';

@Component({
  selector: 'ae-programstart',
  templateUrl: './programstart.component.html',
  styleUrls: ['./programstart.component.scss'],
})
export class ProgramstartComponent {
  @Input() programData: any[];
  FlexConstants = FlexConstants;
  credentials: ProgramTypeDto[];

  constructor(public store:Store) { }
  
  getImageUrl() {
    if (this.programData) {
      return this.store.selectSnapshot(StrapiSelectors.getApplyImageUrl(this.programData[0]));
    }
    return '';
  }

  fetchCredentials() {
    // this.ptservice.getProgramTypes().subscribe((t)=>{
    //   this.credentials = t;
    // })
  }
}
