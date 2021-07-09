import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-strapi-content-bulletlist',
  templateUrl: './strapi-content.bulletlist.component.html',
  styleUrls: ['./strapi-content.bulletlist.component.scss'],
})
export class StrapiContentBulletListComponent {
  @Input() listItems: string[];
}
