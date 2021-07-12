import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProgramSummaryComponent } from './programs/program-summary/program-summary.component';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsSearchResultsComponent } from './programs/programs-search-results/programs-search-results.component';
import { ProgramResolverService } from '@libs/common/resolvers';

const routes: Routes = [
  
  {
    path: 'home',
    data: { breadcrumb: 'Home' },
    children: [
      { path: '', component: HomeComponent, resolve: { init: ProgramResolverService} },
      {
        path: 'program-search-results',
        data: { breadcrumb: 'Programs Search Results' },
        children:[
          {
            path: '',
            component: ProgramsSearchResultsComponent,
            data: { breadcrumb: '' },
            resolve: { init: ProgramResolverService},
          },
          {
            path: 'summary',
            component: ProgramSummaryComponent,
            data: { breadcrumb: 'Summary' },
            resolve: { init: ProgramResolverService}
          },
        ]
      },
      
    ],
  },
  { path: '*', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
