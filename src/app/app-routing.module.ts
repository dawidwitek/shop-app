import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/views/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { SingleProductDetailsComponent } from './components/single-product-details/single-product-details.component';

import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { UserCartComponent } from './components/user/user-cart/user-cart.component';
import { GuestGuard } from './core/guards/guest.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'single-product-details/:id',
    component: SingleProductDetailsComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
  },

  {
    path: 'cart',
    component: UserCartComponent,
    canActivate: [GuestGuard],
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
