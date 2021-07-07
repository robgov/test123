import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProgramSummaryComponent } from './programs/program-summary/program-summary.component';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsSearchResultsComponent } from './programs/programs-search-results/programs-search-results.component';

const routes: Routes = [
  { path: '*', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    data: { breadcrumb: 'Home' },
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'Summary',
        component: ProgramSummaryComponent,
        data: { breadcrumb: 'Summary' },
      },
      {
        path: 'program-search-results',
        component: ProgramsSearchResultsComponent,
        data: { breadcrumb: 'Programs' },

      },
    ],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
