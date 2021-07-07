import { APP_INITIALIZER, NgModule } from '@angular/core';
import { NgxsModule, Store } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularComponentsModule } from '@abgov/angular-components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppAction } from '@libs/common/store/common/app.actions';
import { pmpState } from '@libs/common/store/store-index';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';

import {
  LocationService,
  ProgramService,
  ProviderService,
} from '@libs/common/services';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';


const MATERIAL_MODULES = [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatTableModule,
  MatToolbarModule,
];

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { EnvironmentSashComponent } from './environment-sash/environment-sash.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FilterPipe } from './filter.pipe';
import { LoanstartComponent } from './loanstart/loanstart.component';
import { ProgramstartComponent } from './programstart/programstart.component';
import { SchoolSummaryComponent } from './school-summary/school-summary.component';
import { SchoolSummaryListComponent } from './school-summary-list/school-summary-list.component';
import { FindProgramsComponent } from './programs/find-programs/find-programs.component';
import { ProgramsSearchResultsComponent } from './programs/programs-search-results/programs-search-results.component';
import { ProgramSummaryComponent } from './programs/program-summary/program-summary.component';
import { ProgramCategorySummaryComponent } from './programs/program-category-summary/program-category-summary.component';
import { ProgramCategorySummaryListComponent } from './programs/program-category-summary-list/program-category-summary-list.component';
import { TypetextComponent } from './typetext/typetext.component';
import { TypetextdetailComponent } from './typetextdetail/typetextdetail.component';
import { ProgramSearchResultsFilterComponent } from './program-search-results-filter/program-search-results-filter.component';
import { ProgramSearchSortOptionsSidebarComponent } from './program-search-sort-options-sidebar/program-search-sort-options-sidebar.component';
import { ProgramSearchFilterOptionsSidebarComponent } from './program-search-filter-options-sidebar/program-search-filter-options-sidebar.component';
import { ProgramCardComponent } from './program-card/program-card.component';
import { ProgramSummaryDetailComponent } from './program-summary-detail/program-summary-detail.component';
import { ProviderLocationComponent } from './provider-location/provider-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    EnvironmentSashComponent,
    BreadcrumbComponent,
    FilterPipe,
    LoanstartComponent,
    ProgramstartComponent,
    SchoolSummaryComponent,
    SchoolSummaryListComponent,
    FindProgramsComponent,
    ProgramsSearchResultsComponent,
    ProgramSummaryComponent,
    ProgramCategorySummaryComponent,
    ProgramCategorySummaryListComponent,
    TypetextComponent,
    TypetextdetailComponent,
    ProgramSearchResultsFilterComponent,
    ProgramSearchSortOptionsSidebarComponent,
    ProgramSearchFilterOptionsSidebarComponent,
    ProgramCardComponent,
    MenuSidebarComponent,
    ProgramSummaryDetailComponent,
    ProviderLocationComponent,
  ],
  imports: [
    BrowserModule,
    AngularComponentsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MATERIAL_MODULES,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forRoot(pmpState),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsRouterPluginModule.forRoot()
  ],
  providers: [
    LocationService,
    LocationService,
    ProgramService,
    ProviderService,
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store) => () => store.dispatch(new AppAction.Start()),
      deps: [Store],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
