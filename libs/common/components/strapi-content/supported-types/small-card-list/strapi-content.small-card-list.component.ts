import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-strapi-content-small-card-list',
  templateUrl: './strapi-content.small-card-list.component.html',
  styleUrls: ['./strapi-content.small-card-list.component.scss'],
})
export class StrapiContentSmallCardListComponent {
  @Input() listItems: string[];
  @Input() content: string;
}
