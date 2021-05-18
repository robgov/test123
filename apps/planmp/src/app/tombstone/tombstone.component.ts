import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Institution {
  institutionName: string;
}



@Component({
  selector: 'aedigital-tombstone',
  templateUrl: './tombstone.component.html',
  styleUrls: ['./tombstone.component.scss']
})
export class TombstoneComponent implements OnInit {



  institutions: Institution[] = [];
  pagenumber =1;
  pagesize =5;

  constructor(private http: HttpClient) { }
  ngOnInit(): void { this.fetch(); }



  fetch() {
    const localurl = "https://localhost:5001";
    const url = localurl + "/API/Institutions?PageNumber=" + this.pagenumber + "&PageSize=" + this.pagesize;
    this.http.get<Institution[]>(url).subscribe((t) => (this.institutions = t));
  }
}


