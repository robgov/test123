import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Provider {
  providerName: string;
}



@Component({
  selector: 'TombstoneComponent',
  templateUrl: './tombstone.component.html',
  styleUrls: ['./tombstone.component.scss']
})
export class TombstoneComponent implements OnInit {



  providers: Provider[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void { this.fetch(); }



  fetch() {
    var url = "https://aedigitalproviderapi20210311145202.azurewebsites.net/API/Providers?PageNumber=1&PageSize=10";
    this.http.get<Provider[]>(url).subscribe((t) => (this.providers = t));
  }
}


