import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-strapi-content-small-card',
  templateUrl: './strapi-content.small-card.component.html',
  styleUrls: ['./strapi-content.small-card.component.scss'],
})
export class StrapiContentSmallCardComponent {
  @Input() section: any;
}
