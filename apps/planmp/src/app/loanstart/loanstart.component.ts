import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlexConstants } from '@libs/FlexConstants';
import { environment } from '../environment/environment';
import { StrapiService } from '@libs/common/services';

@Component({
  selector: 'aedigital-loanstart',
  templateUrl: './loanstart.component.html',
  styleUrls: ['./loanstart.component.scss'],
})
export class LoanstartComponent implements OnInit {
  env = environment;
  FlexConstants = FlexConstants;
  loandata: any[] = [
    {
      loantitle: 'Title',
      loanmessage: 'Subtitle',
      loanimage: 'Header',
      Summary: 'Strapi call failed',
    },
  ];

  constructor(private strapiService: StrapiService) {}

  ngOnInit(): void {
    this.strapiService.getLoanApplies().subscribe((data: any) => {
      this.loandata = data;
    });
  }

  AddBackgroundImage() {
    return (
      "'url('" +
      this.env.StrapiBaseUrl +
      this.loandata[0].loanapplyimage.url +
      "')'"
    );
  }

  getLoanApplyUrl() {
    if (this.loandata) {
      return (
        'http://aestrapi-dev.eastus.cloudapp.azure.com:1337' +
        this.loandata[0].Loanapplyimage.url
      );
    }
    return '';
  }
}
