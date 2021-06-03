import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aedigital-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() totalItems = 18;
  @Input() itemsPerPage = 6;
  @Input() currentPage = 1;
  constructor() { }

  totalPages () {
    var pages = Math.floor(this.totalItems / this.itemsPerPage);
    if (pages > 1) {
      pages=1;
    }
    return pages;
  }

  ngOnInit(): void {
  }

  navigateTo(newPage){

  }

  previousPage() {

  }

  nextPage() {

  }
}
