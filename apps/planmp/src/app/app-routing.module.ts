import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TombstoneComponent } from './tombstone/tombstone.component';
import { Routes, RouterModule } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { ProgramsSearchResultsComponent } from './programs-search-results/programs-search-results.component';

const routes: Routes = [
  { path: '*', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    data: { breadcrumb: 'Home' },
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'Page1',
        component: TombstoneComponent,
        data: { breadcrumb: 'Tombstone' },
      },
      {
        path: 'Page2',
        component: InputFormComponent,
        data: { breadcrumb: 'Test Form Thing' },
      },
      {
        path: 'program-search-results',
        component: ProgramsSearchResultsComponent,
        data: { breadcrumb: 'Programs' },
      },
    ],
  },
  // {path: 'Page1', component:TombstoneComponent},
  // {path: 'Page2', component:InputFormComponent},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
