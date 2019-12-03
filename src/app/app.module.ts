import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
//import { FormBuilder } from '@angular/forms'

import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    //FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
