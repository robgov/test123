import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  public urlBase = 'http://aestrapi-dev.eastus.cloudapp.azure.com:1337';

  constructor(public http: HttpClient) { }

  public getProgramData(): Observable<any> {
      return this.http.get(this.urlBase + "/ae-programapplies");
  }

  public getLoanData(): Observable<any> {
      return this.http.get(this.urlBase + "/ae-loanapplies")
  }
}
