import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {InstitutionSummaryService} from '@libs/common/services';
import { InstitutionsParameters } from '@libs/common/models';

interface Institution {
  institutionName: string;
}



@Component({
  selector: 'aedigital-tombstone',
  templateUrl: './tombstone.component.html',
  styleUrls: ['./tombstone.component.scss']
})
export class TombstoneComponent implements OnInit {

  searchText: string;
  institutions: Institution[] = [];
  pagenumber =1;
  pagesize =5;

  constructor(private http: HttpClient, private institutionSummaryService: InstitutionSummaryService) { }
  ngOnInit(): void { this.fetch(); }



  fetch() {

    let params: InstitutionsParameters  = new InstitutionsParameters();
    params.pageNumber=this.pagenumber;
    params.pageSize = this.pagesize;
    
    this.institutionSummaryService.getInstitutionSummarys(params).subscribe((t)=> (this.institutions = t));

    // const localurl = "https://localhost:5001";
    // const url = localurl + "/API/InstitutionSummary?PageNumber=" + this.pagenumber + "&PageSize=" + this.pagesize;
    // this.http.get<Institution[]>(url).subscribe((t) => (this.institutions = t));
  }
}


