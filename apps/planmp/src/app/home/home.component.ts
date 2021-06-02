import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProgramService, AlbertaPSIProviderService } from '@libs/common/services';

interface PageContent {
  Title: string;
  Subtitle: string;
  Summary: string;
  SplashImage: ImageBitmap;
}

@Component({
  selector: 'aedigital-mono-repo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  programCategories: string[];

  url = 'http://localhost:1337/ds-home-pages';
  constructor(
    private http: HttpClient,
    private apsiProviderService: AlbertaPSIProviderService
  ) {}

  ngOnInit(): void {
    this.getProgramCategories();
  }

  fetch() {}

  getProgramCategories() {
    this.apsiProviderService.getAlbertaPsiProviderCategories().subscribe((result) => {
      this.programCategories = result;
    });
  }
}
