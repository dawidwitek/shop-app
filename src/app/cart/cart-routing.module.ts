import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuard } from '../core/guards/guest.guard';
import { UserCartComponent } from './views/user-cart/user-cart.component';

const routes: Routes = [
  {
    path: 'cart',
    component: UserCartComponent,
    canActivate: [GuestGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
