import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  public urlBase = 'http://aestrapi-dev.eastus.cloudapp.azure.com:1337';

  constructor(public http: HttpClient) {}

  public getProgramData(): Observable<any> {
    return this.http.get(this.urlBase + '/ae-programapplies');
  }

  public getLoanData(): Observable<any> {
    return this.http.get(this.urlBase + '/ae-loanapplies');
  }

  public getProgramDetailData(): Observable<any[]> {
    const results = new Array<object>();
    results.push(new Object({ 
      programId: 1,
      admission: { 
        title: 'How do I get in?' ,
        sections: [
           {
            displayOrder: 1,
            title: 'Categories of Admission',
            content: 'Applicants may be admitted through one of the following:'
          },
          {
            displayOrder: 2,
            title: 'Regular Admission',
            content: 'To be evaluated through the office of the University Registrar, applicants must have a minimum overalge average of 65%, with'
          },
          {
            displayOrder: 3,
            title: 'Mature Admission',
            content: 'To be evaluated through the office of the University Registrar, applicants must:'
          },
          {
            displayOrder: 4,
            title: 'Previous Post-Secondary Admission',
            content: 'To be evaluated through the office of the University Registrar, applicants must present a minimum of 24 post-secondary'
          },
          {
            displayOrder: 5,
            title: 'Additional Admission Criteria',
            subtitle: '1. English Language Proficiency',
            content: 'To be evaluated through the office of the University Registrar, applicants must meet an acceptable level of English'
          },
          ]
        }
      }
    ));
    return of(results);
  }
}
