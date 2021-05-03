import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {BadgeComponent} from './badge/badge.component';
import {ButtonToggleComponent} from './button-toggle/button-toggle.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'badge',
    loadChildren: () => import('./badge/badge.module').then(m => m.BadgeModule),
    pathMatch: 'full',
    component: BadgeComponent
  },
  {
    path: 'button-toggle',
    component: ButtonToggleComponent,
    loadChildren: () => import('./button-toggle/button-toggle.module').then(m => m.ButtonToggleModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
