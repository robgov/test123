import { Component } from '@angular/core';
import { FlexConstants} from '@libs/FlexConstants';

@Component({
  selector: 'aedigital-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  FlexConstants = FlexConstants;
}

