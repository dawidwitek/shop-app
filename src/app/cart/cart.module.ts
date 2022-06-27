import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCartComponent } from './views/user-cart/user-cart.component';
import { UserCartItemComponent } from './components/user-cart-item/user-cart-item.component';
import { UserCartSummaryComponent } from './components/user-cart-summary/user-cart-summary.component';
import { CartRoutingModule } from './cart-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserCartComponent,
    UserCartItemComponent,
    UserCartSummaryComponent,
  ],
  imports: [CommonModule, CartRoutingModule, FormsModule],
})
export class CartModule {}
