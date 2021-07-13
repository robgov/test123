import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-strapi-content-bulletlist',
  templateUrl: './strapi-content.bulletlist.component.html',
  styleUrls: ['./strapi-content.bulletlist.component.scss'],
})
export class StrapiContentBulletListComponent {
  @Input() section: any;

  getListItems(){
    if (!this.section.content) return '';
    return this.section.content.split('\n');
  }
}
