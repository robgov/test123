import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FlexConstants } from '@libs/FlexConstants';


interface PageContent {

  Title: string;
  Subtitle: string;
  Summary: string;
  SplashImage: ImageBitmap;
}


@Component({
  selector: 'aedigital-mono-repo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  FlexConstants = FlexConstants;

  providers: any[] = [
    {
      PageTitle: "Title",
      Subtitle: "Subtitle",
      Header: "Header",
      Summary: "Strapi call failed",
    }];

  url = "http://localhost:1337/ds-home-pages";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetch();
  }



  fetch() {

    const url = "http://localhost:8080/ds-homepages";
    this.http.get<any[]>(url).subscribe((t) => {
      (this.providers = t)
    }
    );
  }
}