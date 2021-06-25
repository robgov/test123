import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProgramActions } from '@libs/common/store/store-index';
import { VwPmpLookup } from '@libs/common/models';

@Component({
  selector: 'aedigital-program-search-sort-options-sidebar',
  templateUrl: './program-search-sort-options-sidebar.component.html',
  styleUrls: ['./program-search-sort-options-sidebar.component.scss']
})
export class ProgramSearchSortOptionsSidebarComponent implements OnInit {
  @Input() sortOptions: VwPmpLookup[];
  @Input() selectedSortOrder: string;
  
  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  
  sortOrderSelected(sortOrder: string){
    this.store.dispatch(new ProgramActions.SetProgramSearchSortOrder(sortOrder));
  }

  close(){
    this.store.dispatch(new ProgramActions.CloseProgramSort());
  }
}
