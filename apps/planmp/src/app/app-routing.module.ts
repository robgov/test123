import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TombstoneComponent } from './tombstone/tombstone.component'
import { Routes, RouterModule } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';



const routes: Routes = [
  { path: '*', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', data: { breadcrumb: 'Advanced Education - Test Flow' }, children: [
      { path: '', component: HomeComponent },
      { path: 'Page1', component: TombstoneComponent, data: { breadcrumb: 'Tombstone' } },
      { path: 'Page2', component: InputFormComponent, data: { breadcrumb: 'Test Form Thing' } },
    ]
  },
  // {path: 'Page1', component:TombstoneComponent},
  // {path: 'Page2', component:InputFormComponent},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
