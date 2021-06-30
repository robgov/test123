import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FlexConstants } from '@libs/FlexConstants';
import { environment } from '../environment/environment';

@Component({
  selector: 'aedigital-loanstart',
  templateUrl: './loanstart.component.html',
  styleUrls: ['./loanstart.component.scss']
})
export class LoanstartComponent implements OnInit {

  env = environment;
  FlexConstants = FlexConstants;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetch();
  }

  loandata: any[] = [
    {
      loantitle: "Title",
      loanmessage: "Subtitle",
      loanimage: "Header",
      Summary: "Strapi call failed",
    }];


    AddBackgroundImage() {
      return "'url('" + this.env.StrapiBaseUrl + this.loandata[0].loanapplyimage.url + "')'";
    }

    getLoanApplyUrl(){

      if (this.loandata) {
        return "http://aestrapi-dev.eastus.cloudapp.azure.com:1337" + this.loandata[0].Loanapplyimage.url;
      }
      return '';
    }

  fetch() {



    const url = this.env.StrapiBaseUrl + "/ae-loanapplies";
    this.http.get<any[]>(url).subscribe((t) => {
      (this.loandata = t)
    }
    );
  }
}
