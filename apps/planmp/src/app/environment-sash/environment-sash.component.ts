import { Component, Input } from '@angular/core';

@Component({
  selector: 'aedigital-environment-sash',
  templateUrl: './environment-sash.component.html',
  styleUrls: ['./environment-sash.component.scss']
})
export class EnvironmentSashComponent {

  @Input() version;

	ExternalUrl = {AlbertaCa : 'https://alberta.ca'};

	// constructor(private dialog: MatDialog) {}

	// onDetails() {
	// 	this.dialog.open(BetaDisclaimerDialogComponent, {
	// 		width: '800px',
	// 		autoFocus: false,
	// 		disableClose: false,
	// 	});
	// }
}
