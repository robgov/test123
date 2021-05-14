import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularComponentsModule } from '@abgov/angular-components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';


const MATERIAL_MODULES = [ MatButtonModule, 
                           MatCardModule, 
                           MatCheckboxModule, 
                           MatChipsModule, 
                           MatDialogModule,
                           MatFormFieldModule,
                           MatListModule, 
                           MatIconModule, 
                           MatInputModule, 
                           MatSelectModule,
                           MatSidenavModule];

// Components
import { AppComponent } from './app.component';
import { TombstoneComponent } from './tombstone/tombstone.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputFormComponent } from './input-form/input-form.component';
import { BannerComponent } from './banner/banner.component';
import { EnvironmentSashComponent } from './environment-sash/environment-sash.component';

@NgModule({

  declarations: [AppComponent, TombstoneComponent, HomeComponent, HeaderComponent, FooterComponent, InputFormComponent, BannerComponent, EnvironmentSashComponent],
  imports: [BrowserModule, AngularComponentsModule, BrowserAnimationsModule , FlexLayoutModule,
    MATERIAL_MODULES, AppRoutingModule, HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
