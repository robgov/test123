import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aedigital-strapi-content-text',
  templateUrl: './strapi-content.text.component.html',
  styleUrls: ['./strapi-content.text.component.scss'],
})
export class StrapiContentTextComponent {
  @Input() title: any;
  @Input() titleTarget: string;
  @Input() subTitle: string;
  @Input() content: any;
}
