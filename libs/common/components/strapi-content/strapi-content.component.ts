import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-strapi-content',
  templateUrl: './strapi-content.component.html',
  styleUrls: ['./strapi-content.component.scss'],
})
export class StrapiContentComponent {
  @Input() title: any;
  @Input() titleTarget: string;
  @Input() content: any;
}
