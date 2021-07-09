import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-strapi-content-small-card',
  templateUrl: './strapi-content.small-card.component.html',
  styleUrls: ['./strapi-content.small-card.component.scss'],
})
export class StrapiContentSmallCardComponent {
  @Input() title: any;
  @Input() titleTarget: string;
  @Input() subTitle: string;
  @Input() content: any;
  @Input() footer: string;
  @Input() value: string;
  @Input() icon: string;
}
