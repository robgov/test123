import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FlexConstants } from '@libs/FlexConstants';
import {InstitutionSummaryService, ProviderService} from '@libs/common/services';
import {InstitutionsParameters, PagedDataParameters, VwProvider } from '@libs/common/models';

@Component({
  selector: 'ae-programstart',
  templateUrl: './programstart.component.html',
  styleUrls: ['./programstart.component.scss']
})
export class ProgramstartComponent implements OnInit {
 
FlexConstants = FlexConstants;
searchText: string;
institutions: any[] = [];
providers: VwProvider[];
pagenumber =1;
pagesize =5;

constructor(private http: HttpClient, private providerService: ProviderService) { }
ngOnInit(): void { this.fetch(); }






  programdata: any[] = [
    {

    }];

  fetch() {

    const url = "http://localhost:1337/ae-programapplies";
    this.http.get<any[]>(url).subscribe((t) => {
      (this.programdata = t)
    }
    );
  }




  fetchProviders() {

    let params: PagedDataParameters  = new PagedDataParameters();
    params.pageNumber=this.pagenumber;
    params.pageSize = this.pagesize;
    
    this.providerService.getProviders(params).subscribe((t)=>{
      this.providers = t;
    })
  }



}