import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aedigital-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(route: ActivatedRoute) { 
    const children: ActivatedRoute[] = route.children;
  }

  ngOnInit(): void {
  }

}
