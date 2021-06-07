import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FlexConstants } from '@libs/FlexConstants';
import { MatMenuModule } from '@angular/material/menu';
import { environment } from '../environment/environment';

interface PageContent {

  Title: string;
  Subtitle: string;
  Summary: string;
  SplashImage: ImageBitmap;
}

interface SearchOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'aedigital-mono-repo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  env = environment;

  selectedValue: string;
  selectedValue2: string;
  selectedValue3: string;

  FlexConstants = FlexConstants;

  searchoptions: SearchOption[] = [
    {value: 'schools', viewValue: 'schools'},
    {value: 'programs', viewValue: 'programs'}
  ];

  providers: any[] = [
    {
      PageTitle: "Title",
      Subtitle: "Subtitle",
      Header: "Header",
      Summary: "Strapi call failed",
    }];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetch();
  }

  getbackgroundurl()
  {
    if(this.providers[0].HeroImage)
    {
      return this.providers[0].HeroImage[0].url;
    }
    else  
    {
      return "";
    }
  }

  fetch() {

    const url = this.env.StrapiBaseUrl + "/ae-landingpages";
    this.http.get<any[]>(url).subscribe((t) => {
      (this.providers = t)
    }
    );
  }
}