import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FlexConstants } from '@libs/FlexConstants';
import {ProgramTypeService} from '@libs/common/services';
import { PagedDataParameters, ProgramCredentialDto, ProgramTypeDto } from '@libs/common/models';

@Component({
  selector: 'ae-programstart',
  templateUrl: './programstart.component.html',
  styleUrls: ['./programstart.component.scss']
})
export class ProgramstartComponent implements OnInit {
 
FlexConstants = FlexConstants;
searchText: string;
institutions: any[] = [];
credentials: ProgramTypeDto[];

constructor(private http: HttpClient) { }
ngOnInit(): void { 
  this.fetch();
  this.fetchCredentials();
}
  programdata: any[] = [
    {

    }];

  fetch() {

    const url = "http://aestrapi-dev.eastus.cloudapp.azure.com:1337/ae-programapplies";
    this.http.get<any[]>(url).subscribe((t) => {
      (this.programdata = t)
    }
    );
  }

  getImageUrl(){
    if (this.programdata[0]) {
      return "http://aestrapi-dev.eastus.cloudapp.azure.com:1337" + this.programdata[0].Applyimage.url;
    }
    return "";
  }

  fetchCredentials() {
    // this.ptservice.getProgramTypes().subscribe((t)=>{
    //   this.credentials = t;
    // })
  }
}