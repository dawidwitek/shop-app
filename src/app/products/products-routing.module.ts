import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuard } from '../core/guards/guest.guard';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [GuestGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
