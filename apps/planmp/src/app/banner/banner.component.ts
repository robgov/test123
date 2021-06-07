import { Component, Input } from '@angular/core';
import { environment } from '../environment/environment';

@Component({
  selector: 'aedigital-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() backgroundImage: null;

  env = environment;
  AddBackgroundImage() {
    return this.env.StrapiBaseUrl + this.backgroundImage;
  }
}
