import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbertaPSIProviderService } from '@libs/common/services';
import { FlexConstants } from '@libs/FlexConstants';

@Component({
  selector: 'aedigital-mono-repo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  FlexConstants = FlexConstants;

  programCategories: string[];

  url = 'http://localhost:1337/ds-home-pages';
  constructor(
    private http: HttpClient,
    private apsiProviderService: AlbertaPSIProviderService
  ) {}
}
