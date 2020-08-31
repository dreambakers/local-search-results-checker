import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalSearchFormComponent } from './local-search-form/local-search-form.component';
import { LocalSearchResultsComponent } from './local-search-results/local-search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalSearchFormComponent,
    LocalSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
