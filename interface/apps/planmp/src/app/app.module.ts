import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularComponentsModule } from '@abgov/angular-components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { TombstoneComponent } from './tombstone/tombstone.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




const MATERIAL_MODULES = [MatCardModule, MatCheckboxModule, MatChipsModule, MatListModule, MatSidenavModule, MatIconModule, MatButtonModule];

@NgModule({

  declarations: [AppComponent, TombstoneComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AngularComponentsModule, BrowserAnimationsModule , FlexLayoutModule,
    MATERIAL_MODULES, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
