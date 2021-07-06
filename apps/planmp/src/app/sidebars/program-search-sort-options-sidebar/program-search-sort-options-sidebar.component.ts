import { Component, Input } from '@angular/core';
import { ProgramActions } from '@libs/common/store';
import { LookupDto } from '@libs/common/models';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
  selector: 'aedigital-program-search-sort-options-sidebar',
  templateUrl: './program-search-sort-options-sidebar.component.html',
  styleUrls: ['./program-search-sort-options-sidebar.component.scss'],
})
export class ProgramSearchSortOptionsSidebarComponent {
  @Input() sortOptions: LookupDto[];
  @Input() selectedSortOrder: string;

  @Dispatch()
  sortOrderSelected(sortOrder: string) {
    return new ProgramActions.SetProgramSearchSortOrder(sortOrder);
  }

  @Dispatch()
  close(){
    return new ProgramActions.CloseSidebar();
  }
}
