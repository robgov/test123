import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


interface PageContent {

  Title: string;
  Subtitle: string;
  Summary:String;
  SplashImage: ImageBitmap;
}


@Component({
  selector: 'aedigital-mono-repo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  providers: any[] = [];

  url: String = "http://localhost:1337/ds-home-pages";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetch();
  }


  
  fetch() {

    var url = "http://localhost:8080/ds-homepages";
    this.http.get<any[]>(url).subscribe((t) => {
      (this.providers = t)
    }
    );
  }
}