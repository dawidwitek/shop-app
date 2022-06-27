import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuard } from '../core/guards/guest.guard';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './views/user-login/user-login.component';
import { UserOrdersComponent } from './views/user-orders/user-orders.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'user-login',
    component: UserLoginComponent,
    canActivate: [GuestGuard],
  },

  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [GuestGuard],
    children: [
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'orders',
        component: UserOrdersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
