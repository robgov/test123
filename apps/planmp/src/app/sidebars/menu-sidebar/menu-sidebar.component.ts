import { Component, OnInit } from '@angular/core';
import { ProgramActions } from '@libs/common/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
  selector: 'aedigital-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Dispatch()
  close(){
    return new ProgramActions.CloseSidebar();
  }
}
