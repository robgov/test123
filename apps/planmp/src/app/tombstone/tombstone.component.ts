import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProviderService } from '@libs/common/services';
import { PagedDataParameters, VwProvider } from '@libs/common/models';

@Component({
  selector: 'aedigital-tombstone',
  templateUrl: './tombstone.component.html',
  styleUrls: ['./tombstone.component.scss'],
})
export class TombstoneComponent implements OnInit {
  searchText: string;
  institutions: any[] = [];
  providers: VwProvider[];
  pagenumber = 1;
  pagesize = 5;

  test: any;

  constructor(
    private http: HttpClient,
    private providerService: ProviderService
  ) {}
  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    const params: PagedDataParameters = new PagedDataParameters();
    params.pageNumber = this.pagenumber;
    params.pageSize = this.pagesize;

    this.providerService.getProviders(params).subscribe((t) => {
      this.providers = t;
    });

    // this.institutionSummaryService.getInstitutionSummarys(params).subscribe((t)=> {
    //   this.institutions = t
    // });

    // const localurl = "https://localhost:5001";
    // const url = localurl + "/API/InstitutionSummary?PageNumber=" + this.pagenumber + "&PageSize=" + this.pagesize;
    // this.http.get<Institution[]>(url).subscribe((t) => (this.institutions = t));
  }
}
