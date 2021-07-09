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
                sortOrder: 1,
                title: 'Categories of Admission',
                content:
                  'Applicants may be admitted through one of the following:',
              },
              {
                sortOrder: 2,
                type: 'list',
                listItems: [
                  'Regular Admission',
                  'Mature Admission',
                  'Previous Post-Secondary Admission'
                ],
              },
              {
                sortOrder: 3,
                type: 'bulletlist',
                content: 'In addition, all applicants must also meet the following admission criteria:',
                listItems: [
                  'English Language Proficiency',
                ],
              },
              {
                sortOrder: 4,
                title: 'Regular Admission',
                content:
                  'To be evaluated through the office of the University Registrar, applicants must have a minimum overall average of 65%, with no course grade lower than 50%, in the following high school courses:',
              },
              {
                sortOrder: 5,
                type: 'list',
                listItems: [
                  'ELA 30-1',
                  'Four subjects from Group A, B, C, or D',
                ],
              },
              {
                sortOrder: 6,
                type: 'bulletlist',
                content: 'Notes:',
                listItems: [
                  'Applicants are strongly encouraged to present a broad range of subjects in order to benefit from the breadth of learning and to increase flexibility of future program and course choices.',
                  'A maximum of two Group B subjects may be presented; they must be from different disciplines.',
                  'A maximum of one Group D subject may be presented. Group D subjects used for admission must be 5-credit or any credit combination of at least 5 credits (e.g., two 3-credit subjects).',
                ],
              },
              {
                sortOrder: 7,
                content:
                  'Applicants with nine or more post-secondary credits must also present a minimum Admission Grade Point Average (AGPA) of 2.0 on a 4.0 scale.',
              },
              {
                sortOrder: 70,
                title: 'Mature Admission',
                content:
                  'To be evaluated through the office of the University Registrar, applicants must:',
              },
              {
                sortOrder: 71,
                type: 'bulletlist',
                listItems: [
                  'Be 20 years of age or older',
                  'Have been out of full-time high school at least one year by the beginning of the intake term',
                ]
              },
              {
                sortOrder: 72,
                content:'Applicants must also have the following:',
                type: 'bulletlist',
                listItems: [
                  'ELA 30-1 with a minimum grade of 65% (or equivalent)',
                ]
              },
              {
                sortOrder: 73,
                content:'OR',
                type: 'bulletlist',
                listItems: [
                  'Six credits of university-level English with no grade less than C-',
                ]
              },
              {
                sortOrder: 74,
                content:
                  'Applicants with nine or more post-secondary credits must also present a minimum Admission Grade Point Average (AGPA) of 2.0 on a 4.0 scale.',
              },
              {
                sortOrder: 80,
                title: 'Previous Post-Secondary Admission',
                content:
                  'To be evaluated through the Office of the University Registrar, applicants must present a minimum of 24 post-secondary credits with a minimum Admission Grade Point Average (AGPA) of 2.0 on the 4.0 scale and must have completed the required core courses listed under the Regular or Mature Category.',
              },
              {
                sortOrder: 81,
                content:
                  'Admission in this category does not imply or guarantee the transfer of any coursework and/or credential unless a block transfer agreement (internal or external) is in effect and published in the Calendar by the Office of the University Registrar. In addition, transfer of coursework does not imply or guarantee that an applicant will be admitted.',
              },
              {
                sortOrder: 90,
                title: 'Additional Admission Criteria',
                subTitle: '1. English Language Proficiency',
                content:
                  'To be evaluated through the Office of the University Registrar, all applicants must meet an acceptable level of English language proficiency. We will require official documents such as:',
              },
              {
                sortOrder: 91,
                type: 'bulletlist',
                listItems: [
                  'High school transcripts',
                  'Post-secondary transcripts',
                  'Proof of successful completion of standardized language evaluation',
                ]
              },
              {
                sortOrder: 92,
                content:
                  'Full details are available in MacEwan University’s academic calendar or online at',
              },
              {
                sortOrder: 93,
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
                sortOrder: 1,
                title: 'How much does it cost?',
                content:
                  'Program costs include tuition, books/supplies, and mandatory fees, and student aid/FLS eligibility Program costs',
              },
              {
                sortOrder: 2,
                title: 'Tuition Increases',
                content:
                  'Tuition fees are reviewed annually by a Board of Governors. Current regulation caps tuition increases at 7% so',
              },
              {
                sortOrder: 3,
                title: 'Mandatory Fees',
                content:
                  'Campus athletic and recreation Fee: $183.20',
              },
              {
                sortOrder: 4,
                title: 'Books, Supplies & Instrument Fees',
                content:
                  'Every course has required reeding and textbooks; they cost can vary greatly for each course or program.',
              },
              {
                sortOrder: 5,
                title: 'Student Aid',
                content:
                  'This program is eligible for full-time post-secondary assistance by Alberta Student Aid for the funding year',
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
                content:
                  'The median (midpoint) annual income of graduates',
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
