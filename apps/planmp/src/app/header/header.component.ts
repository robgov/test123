import { Component, Input } from '@angular/core';

@Component({
  selector: 'aedigital-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() caption: string;
	@Input() subCaption: string;
  
  isDesktop = false;

}
