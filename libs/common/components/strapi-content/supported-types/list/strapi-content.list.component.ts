import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-strapi-content-list',
  templateUrl: './strapi-content.list.component.html',
  styleUrls: ['./strapi-content.list.component.scss'],
})
export class StrapiContentListComponent {
  @Input() listItems: string[];
}
