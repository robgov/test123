import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-strapi-content-card',
  templateUrl: './strapi-content.card.component.html',
  styleUrls: ['./strapi-content.card.component.scss'],
})
export class StrapiContentCardComponent {
  @Input() title: any;
  @Input() titleTarget: string;
  @Input() content: any;
}
