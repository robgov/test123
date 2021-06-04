import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProgramService, AlbertaPSIProviderService } from '@libs/common/services';
import { FlexConstants } from '@libs/FlexConstants';
import { Router } from '@angular/router';

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
  FlexConstants = FlexConstants;

  programCategories: string[];

  url = 'http://localhost:1337/ds-home-pages';
  constructor(
    private http: HttpClient,
    private apsiProviderService: AlbertaPSIProviderService
  ) {}

  ngOnInit(): void {
  }

  fetch() {}
}
