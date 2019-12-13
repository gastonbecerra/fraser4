import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyComponent } from './survey/survey.component';
import { GraciasComponent } from './gracias/gracias.component';

const routes: Routes = [

  { path: '', redirectTo: '/survey', pathMatch: 'full' },
  { path: 'survey', component: SurveyComponent },
  { path: 'gracias', component: GraciasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
