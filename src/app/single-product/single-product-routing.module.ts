import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuard } from '../core/guards/guest.guard';
import { SingleProductDetailsComponent } from './views/single-product-details/single-product-details.component';

const routes: Routes = [
  {
    path: 'single-product-details/:id',
    component: SingleProductDetailsComponent,
    canActivate: [GuestGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleProductRoutingModule {}
