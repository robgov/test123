import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aedigital-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent{

  parentPage: string;
  parentRoute: string;
  currentPage: string;

  constructor(route: ActivatedRoute) { 
    if (route.parent) {
      this.parentPage = route.parent.data['value'].breadcrumb;
      this.parentRoute = route.parent.url['value'][0].path;
    }
    this.currentPage = route.data['value'].breadcrumb;
  }
}
