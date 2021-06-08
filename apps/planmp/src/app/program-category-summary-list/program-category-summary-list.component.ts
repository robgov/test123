import { Component, OnInit } from '@angular/core';
import { VwPmpPsiprogramCountByCategory } from '@libs/common/models';
import { ProgramService } from '@libs/common/services';

@Component({
  selector: 'aedigital-program-category-summary-list',
  templateUrl: './program-category-summary-list.component.html',
  styleUrls: ['./program-category-summary-list.component.scss']
})
export class ProgramCategorySummaryListComponent implements OnInit {
  programCountByCategory: VwPmpPsiprogramCountByCategory[];

  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
    this.loadProgramCountByCategory();
  }

  loadProgramCountByCategory() {
    this.programService.getProgramCountByCategory().subscribe((result)=>{
      this.programCountByCategory = result;
    });
  }
}
