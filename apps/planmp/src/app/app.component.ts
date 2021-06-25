import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FlexConstants} from '@libs/FlexConstants';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { LookupSelectors, ProgramActions, ProgramSelectors, ProviderSelectors } from '@libs/common/store/store-index';
import { MatSidenav } from '@angular/material/sidenav';
import { VwPmpLookup, VwPmpPsiprogramCountByCategory, VwProgram, VwProgramCredential, VwProgramType, VwProvider, VwSpecialization } from '@libs/common/models';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'aedigital-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  @Select(LookupSelectors.getLookupsForType("ProgramSort")) sortOption$: Observable<VwPmpLookup[]>;

  @Select(ProgramSelectors.getCategoryPrograms) categoryPrograms$: Observable<VwSpecialization[]>;
  @Select(ProgramSelectors.getProgramCredentials) programCredentials$: Observable<VwProgramCredential[]>;
  @Select(ProgramSelectors.getFilteredPrograms) filteredPrograms$: Observable<VwProgram[]>;
  @Select(ProgramSelectors.getProgramCategoryCounts) programCountsByCategory$: Observable<VwPmpPsiprogramCountByCategory[]>;
  @Select(ProgramSelectors.getProgramTypes) programTypes$: Observable<VwProgramType[]>;
  @Select(ProviderSelectors.getProviders) providers$: Observable<VwProvider[]>;

  @Select(ProgramSelectors.getSelectedProviders) selectedProviderIds$: Observable<number[]>
  @Select(ProgramSelectors.getSelectedCredentials) selectedCredentialIds$: Observable<number[]>
  @Select(ProgramSelectors.getSelectedSortOrder) selectedSortOrder$: Observable<number[]>

  private subscriptionSort: Subscription;
  private subscriptionSortClose: Subscription;
  private subscriptionFilter: Subscription;
  private subscriptionFilterClose: Subscription;
  
  FlexConstants = FlexConstants;
  @ViewChild('programSort') public filterSidenav: MatSidenav;
  isSort = true;

  constructor(private actions$: Actions, private store: Store) {}

  ngOnInit() {
    this.subscriptionSort = this.actions$.pipe(ofActionSuccessful(ProgramActions.ShowProgramSort)).subscribe(() => {
      this.isSort=true;
      this.filterSidenav.toggle();
    });

    this.subscriptionSortClose = this.actions$.pipe(ofActionSuccessful(ProgramActions.CloseProgramSort)).subscribe(() => {
      this.filterSidenav.close();
    })

    this.subscriptionFilter = this.actions$.pipe(ofActionSuccessful(ProgramActions.ShowProgramFilter)).subscribe(() => {
      this.isSort=false;
      this.filterSidenav.toggle();
    });

    this.subscriptionFilterClose = this.actions$.pipe(ofActionSuccessful(ProgramActions.CloseProgramFilter)).subscribe(()=>{
      this.filterSidenav.toggle();
    })
  }

  ngOnDestroy() {
    this.subscriptionSort.unsubscribe();
    this.subscriptionSortClose.unsubscribe();
    this.subscriptionFilter.unsubscribe();
    this.subscriptionFilterClose.unsubscribe();
  }
}

