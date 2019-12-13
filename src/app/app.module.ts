import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

import { MaterialModule } from './material.module';
//import { FormBuilder } from '@angular/forms'

//COMPOENENTES INTERNOS
import { SurveyComponent } from './survey/survey.component';
import { GraciasComponent } from './gracias/gracias.component';

//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';


import { environment } from '../environments/environment';
import { FirestoreService } from './services/firestore/firestore.service'; // el servicio

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    GraciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    JwSocialButtonsModule
  ],
  providers: [
    AngularFirestore,
    AngularFireDatabase,
    FirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
