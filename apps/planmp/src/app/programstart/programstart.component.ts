import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlexConstants } from '@libs/FlexConstants';
import { environment } from '../environment/environment';
import { ProgramTypeDto } from '@libs/common/models';
import { StrapiService } from '@libs/common/services';

@Component({
  selector: 'ae-programstart',
  templateUrl: './programstart.component.html',
  styleUrls: ['./programstart.component.scss'],
})
export class ProgramstartComponent implements OnInit {
  FlexConstants = FlexConstants;
  credentials: ProgramTypeDto[];
  env = environment;
  programdata: any[] = [{}];

  constructor(private http: HttpClient, private strapiService: StrapiService) {}
  ngOnInit(): void {
    this.strapiService.getProgramData().subscribe((data)=>{
      this.programdata = data;
    })
    this.fetchCredentials();
  }
  
  getImageUrl() {
    if (this.programdata[0]) {
      return (
        'http://aestrapi-dev.eastus.cloudapp.azure.com:1337' +
        this.programdata[0].Applyimage.url
      );
    }
    return '';
  }

  fetchCredentials() {
    // this.ptservice.getProgramTypes().subscribe((t)=>{
    //   this.credentials = t;
    // })
  }
}
