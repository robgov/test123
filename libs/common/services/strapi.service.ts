import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { ProgramSummaryDetailAdmissionComponent } from '@planmp/programs/program-summary-detail/tabs/program-summary-detail-admission/program-summary-detail-admission.component';

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
        tabs:[
          {
            tab:'Admission',
            sortOrder:1,
            title: 'How do I get in?',
            content: '',
            sections: [
              {
                sortOrder: 11,
                title: 'Categories of Admission',
                content:
                  'Applicants may be admitted through one of the following:',
              },
              {
                sortOrder: 12,
                type: 'list',
                listItems: [
                  'Regular Admission',
                  'Mature Admission',
                  'Previous Post-Secondary Admission'
                ],
              },
              {
                sortOrder: 13,
                type: 'bulletlist',
                content: 'In addition, all applicants must also meet the following admission criteria:',
                listItems: [
                  'English Language Proficiency',
                ],
              },
              {
                sortOrder: 20,
                title: 'Regular Admission',
                content:
                  'To be evaluated through the office of the University Registrar, applicants must have a minimum overall average of 65%, with no course grade lower than 50%, in the following high school courses:',
              },
              {
                sortOrder: 21,
                type: 'list',
                listItems: [
                  'ELA 30-1',
                  'Four subjects from Group A, B, C, or D',
                ],
              },
              {
                sortOrder: 22,
                type: 'bulletlist',
                content: 'Notes:',
                listItems: [
                  'Applicants are strongly encouraged to present a broad range of subjects in order to benefit from the breadth of learning and to increase flexibility of future program and course choices.',
                  'A maximum of two Group B subjects may be presented; they must be from different disciplines.',
                  'A maximum of one Group D subject may be presented. Group D subjects used for admission must be 5-credit or any credit combination of at least 5 credits (e.g., two 3-credit subjects).',
                ],
              },
              {
                sortOrder: 23,
                content:
                  'Applicants with nine or more post-secondary credits must also present a minimum Admission Grade Point Average (AGPA) of 2.0 on a 4.0 scale.',
              },
              {
                sortOrder: 30,
                title: 'Mature Admission',
                content:
                  'To be evaluated through the office of the University Registrar, applicants must:',
              },
              {
                sortOrder: 31,
                type: 'bulletlist',
                listItems: [
                  'Be 20 years of age or older',
                  'Have been out of full-time high school at least one year by the beginning of the intake term',
                ]
              },
              {
                sortOrder: 32,
                content:'Applicants must also have the following:',
                type: 'bulletlist',
                listItems: [
                  'ELA 30-1 with a minimum grade of 65% (or equivalent)',
                ]
              },
              {
                sortOrder: 33,
                content:'OR',
                type: 'bulletlist',
                listItems: [
                  'Six credits of university-level English with no grade less than C-',
                ]
              },
              {
                sortOrder: 34,
                content:
                  'Applicants with nine or more post-secondary credits must also present a minimum Admission Grade Point Average (AGPA) of 2.0 on a 4.0 scale.',
              },
              {
                sortOrder: 40,
                title: 'Previous Post-Secondary Admission',
                content:
                  'To be evaluated through the Office of the University Registrar, applicants must present a minimum of 24 post-secondary credits with a minimum Admission Grade Point Average (AGPA) of 2.0 on the 4.0 scale and must have completed the required core courses listed under the Regular or Mature Category.',
              },
              {
                sortOrder: 41,
                content:
                  'Admission in this category does not imply or guarantee the transfer of any coursework and/or credential unless a block transfer agreement (internal or external) is in effect and published in the Calendar by the Office of the University Registrar. In addition, transfer of coursework does not imply or guarantee that an applicant will be admitted.',
              },
              {
                sortOrder: 50,
                title: 'Additional Admission Criteria',
                subTitle: '1. English Language Proficiency',
                content:
                  'To be evaluated through the Office of the University Registrar, all applicants must meet an acceptable level of English language proficiency. We will require official documents such as:',
              },
              {
                sortOrder: 51,
                type: 'bulletlist',
                listItems: [
                  'High school transcripts',
                  'Post-secondary transcripts',
                  'Proof of successful completion of standardized language evaluation',
                ]
              },
              {
                sortOrder: 52,
                content:
                  'Full details are available in MacEwan University’s academic calendar or online at',
              },
              {
                sortOrder: 53,
                title: 'MacEwan.ca/ELP',
                titleTarget: 'http://www.macewan.ca/elp'
              },
            ],
          },
          {
            tab:'Occupations',
            sortOrder:2,
            title: 'What are the most popular occupations?',
            content:
            'Based on data linkage between CIP codes and top occupations held by graduates of that field, as identified in teh 2011 National Household Survey. Data is based on findings at the national level.',
            sections: [
              {
                sortOrder: 1,
                title:
                  'Professional occupations in advertising, marketing and public relations',
                titleTarget: 'http://www.google.com',
                content:
                  'People in this group have professional occupations in advertising, marketing and public',
              },
              {
                sortOrder: 2,
                title:
                  'Advertising, marketing and public relations managers',
                content:
                  'Advertising, marketing and public relations managers plan, organize, direct, control and',
              },
              {
                sortOrder: 3,
                title:
                  'Journalist',
                content:
                  'Journalists research, investigate, interpret and communicate news and public affairs through',
              },
              {
                sortOrder: 4,
                title:
                  'Business development officers and marketing researchers and consultants',
                content:
                  'People in this group do research, prepare policies and manage programs to encourage',
              },
              {
                sortOrder: 5,
                title:
                  'Graphic designers and illustrators',
                content:
                  'Graphic designers and illustrators conceptualize and create graphic art and visual',
              },
              {
                sortOrder: 6,
                content:
                  'Source: ESDC NHS Concordance Table',
              },
            ],
          },
          {
            tab:'Cost',
            sortOrder:3,
            title:'',
            content: '',
            sections: [
              {
                sortOrder: 11,
                title: 'How much does it cost?',
                content:
                  'Program costs include tuition, books/supplies, and mandatory fees, and student aid/FLS eligibility Program costs are shown on a per year basis as well as the expected total cost based on the number of years defined in the degree.',
              },
              {
                sortOrder: 12,
                title: 'Tuition Increases',
                content:
                  'Tuition fees are reviewed annually by a Board of Governors. Current regulation caps tuition increases at 7% so year after year tuition may not remain the same. Below shows the potential range the tuition may increase, from no increase up to the maximum 7%; fees are subject to change every year.',
              },
              {
                sortOrder: 13,
                title: 'Mandatory Fees',
                content:
                  'Campus athletic and recreation Fee: $183.20',
              },
              {
                sortOrder: 14,
                content:
                  'Universal transit pass (UPass): $310 - Check eligibility here.',
              },
              {
                sortOrder: 15,
                content:
                  'Student support fee: $150 Student technology fee: $150',
              },
              {
                sortOrder: 15,
                content:
                  'Student technology fee: $150',
              },
              {
                sortOrder: 21,
                title: 'Books, Supplies & Instrument Fees',
                content:
                  'Every course has required reeding and textbooks; they cost can vary greatly for each course or program.',
                listItems:[
                  'Books and supplies are approximately $1,000 - $2,000 per full-time year.',
                  'These are anticipated costs to participate in the program for purchasing things like text books or lab equipment etc.',
                  'This cost amount is used by student aid to determine amounts students may need.'
                   
                ]
              },
              {
                sortOrder: 22,
                content:
                  '* Tuition, fees, books and supply costs are subject to change.',
              },
              {
                sortOrder: 30,
                title: 'Student Aid',
              },
              {
                sortOrder: 31,
                content:
                  'This program is eligible for full-time post-secondary assistance by Alberta Student Aid for the funding year 2021/08/01 to 2022/07/31*.',
              },
            ]
          },
          {
            tab:'Outcomes',
            sortOrder:4,
            title: 'What outcomes can I expect?',
            content: 'Student Outcomes is a collection and dissemination of information from former students about their post-secondary education and their labour market',
            sections: [
              {
                sortOrder: 1,
                title: 'Annual Median Income',
                type: 'MedianIncome',
                content:
                  'The median (midpoint) annual income of graduates',
                value: '$52,000'
                
              },
              {
                sortOrder: 2,
                title: 'Avg Employment Rate',
                content:
                  'The percentage of graduates who were employed',
              },
              {
                sortOrder: 3,
                title: 'Job Relatedness Rate (Skills and Abilities)',
                content:
                  'The percentage of graduates who thought their current',
              },
              {
                sortOrder: 4,
                title: 'Time to Full Employment (Months)',
                content:
                  'The Median number of months after graduation that it took',
              },
            ]
          }
        ],
      })
    );
    return of(results);
  }
}
