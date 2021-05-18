import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Provider {
  providerName: string;
}



@Component({
  selector: 'aedigital-tombstone',
  templateUrl: './tombstone.component.html',
  styleUrls: ['./tombstone.component.scss']
})
export class TombstoneComponent implements OnInit {



  providers: Provider[] = [];
  pagenumber =1;
  pagesize =5;

  constructor(private http: HttpClient) { }
  ngOnInit(): void { this.fetch(); }



  fetch() {
    const url = "https://aedigitalproviderapi20210311145202.azurewebsites.net/API/Providers?PageNumber=" + this.pagenumber + "&PageSize=" + this.pagesize;
    this.http.get<Provider[]>(url).subscribe((t) => (this.providers = t));
  }
}


