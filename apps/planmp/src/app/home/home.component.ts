import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FlexConstants } from '@libs/FlexConstants';
import { environment } from '../environment/environment';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { VwProgram } from '@libs/common/models';
import {ProgramSelectors } from '@libs/common/store/program';

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

  
  @Select(ProgramSelectors.programs) programs$: Observable<VwProgram[]>;

  programs: VwProgram[];
  cipscode: VwProgram[];
  env = environment;

  selectedValue: string;
  selectedValue2: string;
  selectedValue3: string;

  FlexConstants = FlexConstants;

  searchoptions: SearchOption[] = [
    {value: 'schools', viewValue: 'schools'},
    {value: 'programs', viewValue: 'programs'}
  ];

  providers: any[] = [];

  constructor(private http: HttpClient, private store: Store) {
   }

  ngOnInit(): void {
    this.fetch();
  }

  getbackgroundurl()
  {
    if(this.providers && this.providers[0] && this.providers[0].HeroImage)
    {
      return this.providers[0].HeroImage.url;
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

  //Redirect to the router
}
