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
    results.push(
      new Object({
        programId: 1,
        admission: {
          title: 'How do I get in?',
          sections: [
            {
              displayOrder: 1,
              title: 'Categories of Admission',
              content:
                'Applicants may be admitted through one of the following:',
            },
            {
              displayOrder: 2,
              title: 'Regular Admission',
              content:
                'To be evaluated through the office of the University Registrar, applicants must have a minimum overalge average of 65%, with',
            },
            {
              displayOrder: 3,
              title: 'Mature Admission',
              content:
                'To be evaluated through the office of the University Registrar, applicants must:',
            },
            {
              displayOrder: 4,
              title: 'Previous Post-Secondary Admission',
              content:
                'To be evaluated through the office of the University Registrar, applicants must present a minimum of 24 post-secondary',
            },
            {
              displayOrder: 5,
              title: 'Additional Admission Criteria',
              subtitle: '1. English Language Proficiency',
              content:
                'To be evaluated through the office of the University Registrar, applicants must meet an acceptable level of English',
            },
          ],
        },
        occupations: {
          title: 'What are the most popular occupations?',
          content:
            'Based on data linkage between CIP codes and top occupations held by graduates of that field, as identified in teh 2011 National Household Survey. Data is based on findings at the national level.',
          sections: [
            {
              displayOrder: 1,
              title:
                'Professional occupations in advertising, marketing and public relations',
              content:
                'People in this group have professional occupations in advertising, marketing and public',
            },
            {
              displayOrder: 2,
              title:
                'Advertising, marketing and public relations managers',
              content:
                'Advertising, marketing and public relations managers plan, organize, direct, control and',
            },
            {
              displayOrder: 3,
              title:
                'Journalist',
              content:
                'Journalists research, investigate, interpret and communicate news and public affairs through',
            },
            {
              displayOrder: 4,
              title:
                'Business development officers and marketing researchers and consultants',
              content:
                'People in this group do research, prepare policies and manage programs to encourage',
            },
            {
              displayOrder: 5,
              title:
                'Graphic designers and illustrators',
              content:
                'Graphic designers and illustrators conceptualize and create graphic art and visual',
            },
            {
              displayOrder: 6,
              content:
                'Source: ESDC NHS Concordance Table',
            },
          ],
        },
        cost: {
          sections: [
            {
              displayOrder: 1,
              title: 'How much does it cost?',
              content:
                'Program costs include tuition, books/supplies, and mandatory fees, and student aid/FLS eligibility Program costs',
            },
            {
              displayOrder: 2,
              title: 'Tuition Increases',
              content:
                'Tuition fees are reviewed annually by a Board of Governors. Current regulation caps tuition increases at 7% so',
            },
            {
              displayOrder: 3,
              title: 'Mandatory Fees',
              content:
                'Campus athletic and recreation Fee: $183.20',
            },
            {
              displayOrder: 4,
              title: 'Books, Supplies & Instrument Fees',
              content:
                'Every course has required reeding and textbooks; they cost can vary greatly for each course or program.',
            },
            {
              displayOrder: 5,
              title: 'Student Aid',
              content:
                'This program is eligible for full-time post-secondary assistance by Alberta Student Aid for the funding year',
            },
          ]
        },
        outcomes:{
          title: 'What outcomes can I expect?',
          content: 'Student Outcomes is a collection and dissemination of information from former students about their post-secondary education and their labour market',
          sections: [
            {
              displayOrder: 1,
              title: 'Annual Median Income',
              content:
                'The median (midpoint) annual income of graduates',
            },
            {
              displayOrder: 2,
              title: 'Avg Employment Rate',
              content:
                'The percentage of graduates who were employed',
            },
            {
              displayOrder: 3,
              title: 'Job Relatedness Rate (Skills and Abilities)',
              content:
                'The percentage of graduates who thought their current',
            },
            {
              displayOrder: 4,
              title: 'Time to Full Employment (Months)',
              content:
                'The Median number of months after graduation that it took',
            },
          ]
        }
      })
    );
    return of(results);
  }
}
