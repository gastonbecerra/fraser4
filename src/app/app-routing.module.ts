import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyComponent } from './survey/survey.component';
import { GraciasComponent } from './gracias/gracias.component';
import { OracionesComponent } from './oraciones/oraciones.component'

const routes: Routes = [

  // { path: '', redirectTo: '/survey', pathMatch: 'full' },
  { path: '', component: OracionesComponent },
  { path: 'old', component: SurveyComponent , pathMatch: 'prefix'},
  { path: 'gracias', component: GraciasComponent , pathMatch: 'prefix'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
