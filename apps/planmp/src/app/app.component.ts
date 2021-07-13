import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FlexConstants} from '@libs/FlexConstants';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { LookupSelectors, ProgramActions, ProgramSelectors, ProviderSelectors } from '@libs/common/store';
import { MatSidenav } from '@angular/material/sidenav';
import { LookupDto, PsiSpecializationCountByCategoryDto, ProgramDto, ProgramCredentialDto, ProgramTypeDto, ProviderDto, SpecializationDto } from '@libs/common/models';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
  selector: 'aedigital-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  @Select(LookupSelectors.getLookupsForType("ProgramSort")) sortOption$: Observable<LookupDto[]>;

  @Select(ProgramSelectors.getCategoryPrograms) categoryPrograms$: Observable<SpecializationDto[]>;
  @Select(ProgramSelectors.getProgramCredentials) programCredentials$: Observable<ProgramCredentialDto[]>;
  @Select(ProgramSelectors.getFilteredPrograms) filteredPrograms$: Observable<ProgramDto[]>;
  @Select(ProgramSelectors.getProgramCategoryCounts) programCountsByCategory$: Observable<PsiSpecializationCountByCategoryDto[]>;
  @Select(ProgramSelectors.getProgramTypes) programTypes$: Observable<ProgramTypeDto[]>;
  @Select(ProviderSelectors.getProviders) providers$: Observable<ProviderDto[]>;

  @Select(ProgramSelectors.getSelectedProviders) selectedProviderIds$: Observable<number[]>
  @Select(ProgramSelectors.getSelectedCredentials) selectedCredentialIds$: Observable<number[]>
  @Select(ProgramSelectors.getSelectedLocation) selectedPostalCode$: Observable<string>
  @Select(ProgramSelectors.getSelectedCipSubSeriesCode) selectedCipSubSeriesCode$: Observable<string>
  @Select(ProgramSelectors.getSelectedSortOrder) selectedSortOrder$: Observable<number[]>

  private subscriptionSort: Subscription;
  private subscriptionFilter: Subscription;
  private subscriptionSidebarClose: Subscription;
  private subscriptionMenu: Subscription;
  
  FlexConstants = FlexConstants;
  @ViewChild('rightSidenav') public rightSidenav: MatSidenav;
  @ViewChild('leftSidenav') public leftSidenav: MatSidenav;
  menu: string=null;

  constructor(private actions$: Actions) {}

  ngOnInit() {
    this.subscriptionSort = this.actions$.pipe(ofActionSuccessful(ProgramActions.ShowProgramSort)).subscribe(() => {
      this.menu="sort";
      this.rightSidenav.toggle();
    });

    this.subscriptionSidebarClose = this.actions$.pipe(ofActionSuccessful(ProgramActions.CloseSidebar)).subscribe(() => {
      this.menu=null;
      this.rightSidenav.close();
    })

    this.subscriptionFilter = this.actions$.pipe(ofActionSuccessful(ProgramActions.ShowProgramFilter)).subscribe(() => {
      this.menu="filter";
      this.rightSidenav.toggle();
    });

    this.subscriptionMenu = this.actions$.pipe(ofActionSuccessful(ProgramActions.ShowMenu)).subscribe(() => {
      this.menu="menu";
      this.rightSidenav.toggle();
    });
  }

  @Dispatch()
  showMenu() {
    return new ProgramActions.ShowMenu();
  }

  ngOnDestroy() {
    this.subscriptionSort.unsubscribe();
    this.subscriptionFilter.unsubscribe();
    this.subscriptionSidebarClose.unsubscribe();
    this.subscriptionMenu.unsubscribe();
  }
}

