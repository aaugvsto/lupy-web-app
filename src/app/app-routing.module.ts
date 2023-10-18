import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FramePageComponent } from './pages/frame-page/frame-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component: FramePageComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: 'consultas',
    component: FramePageComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: 'vacinas',
    component: FramePageComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: 'meus-clientes',
    component: FramePageComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: 'internacoes',
    component: FramePageComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: 'minha-clinica',
    component: FramePageComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: 'inicio',
    component: FramePageComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
