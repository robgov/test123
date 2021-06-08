import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FlexConstants } from '@libs/FlexConstants';
import {ProgramTypeService} from '@libs/common/services';
import { PagedDataParameters, VwProgramType } from '@libs/common/models';

@Component({
  selector: 'ae-programstart',
  templateUrl: './programstart.component.html',
  styleUrls: ['./programstart.component.scss']
})
export class ProgramstartComponent implements OnInit {
 
FlexConstants = FlexConstants;
searchText: string;
institutions: any[] = [];
credentials: VwProgramType[];

constructor(private http: HttpClient, private ptservice: ProgramTypeService) { }
ngOnInit(): void { 
  this.fetch();
  this.fetchCredentials();
}






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

  fetchCredentials() {
    this.ptservice.gGetCredentials().subscribe((t)=>{
      this.credentials = t;
    })
  }
}