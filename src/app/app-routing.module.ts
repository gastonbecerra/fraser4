import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'survey', component: SurveyComponent },

  /*
  { path: 'callback', component: CallbackComponent },   // viene de autenticacion
  // { path: 'modulos', component: ModulosComponent, canActivate: [AuthGuard]},
  { path: 'modulos', component: ModulosComponent },
  { path: 'modulo/:modulo', component: ModuloComponent },
  { path: '**', component: ModulosComponent },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
