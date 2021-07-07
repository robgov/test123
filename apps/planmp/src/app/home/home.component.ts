import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlexConstants } from '@libs/FlexConstants';
import { environment } from '../environment/environment';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProgramDto } from '@libs/common/models';
import { ProgramSelectors, StrapiSelectors } from '@libs/common/store';

@Component({
  selector: 'aedigital-mono-repo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Select(ProgramSelectors.programs) programs$: Observable<ProgramDto[]>;
  @Select(StrapiSelectors.loanData) loanData$: Observable<Object[]>
  @Select(StrapiSelectors.programData) programData$: Observable<Object[]>;

  FlexConstants = FlexConstants;

  env = environment;

  providers: any[] = [];

  constructor(private http: HttpClient, private store: Store) {}

  ngOnInit(): void {
    this.fetch();
  }

  getbackgroundurl() {
    if (this.providers && this.providers[0] && this.providers[0].HeroImage) {
      return this.providers[0].HeroImage.url;
    } else {
      return '';
    }
  }

  fetch() {
    const url = this.env.StrapiBaseUrl + '/ae-landingpages';
    this.http.get<any[]>(url).subscribe((t) => {
      this.providers = t;
    });
  }
}
