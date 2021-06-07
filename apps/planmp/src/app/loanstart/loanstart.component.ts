import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FlexConstants } from '@libs/FlexConstants';

@Component({
  selector: 'aedigital-loanstart',
  templateUrl: './loanstart.component.html',
  styleUrls: ['./loanstart.component.scss']
})
export class LoanstartComponent implements OnInit {

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

  fetch() {

    const url = "http://localhost:1337/ae-loanapplies";
    this.http.get<any[]>(url).subscribe((t) => {
      (this.loandata = t)
    }
    );
  }
}
