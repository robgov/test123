import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  ProgramSelectors, ProgramActions, StrapiSelectors, ProviderSelectors,
} from '@libs/common/store/store-index';
import { Observable } from 'rxjs';

@Component({
  selector: 'aedigital-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Select(ProgramSelectors.version) version$: Observable<string>;
  
  @Input() caption: string;
	@Input() subCaption: string;
  isDesktop = false;
}
