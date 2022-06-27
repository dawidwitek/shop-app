import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { GuestGuard } from '../core/guards/guest.guard';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './views/admin-login/admin-login.component';
import { AdminSettingsComponent } from './views/admin-settings/admin-settings.component';

const routes: Routes = [
  {
    path: 'admin-login',
    component: AdminLoginComponent,
    canActivate: [GuestGuard],
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'settings',
        component: AdminSettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
