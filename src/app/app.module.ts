import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SingleProductDetailsComponent } from './components/single-product-details/single-product-details.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './components/cart/cart.component';
import { cartReducer } from './store/reducers/cart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserCartComponent } from './components/user/user-cart/user-cart.component';
import { UserCartSummaryComponent } from './components/user/user-cart-summary/user-cart-summary.component';
import { UserCartItemComponent } from './components/user/user-cart-item/user-cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ProductsComponent,
    ProductComponent,
    PagenotfoundComponent,
    SingleProductDetailsComponent,
    LoginComponent,
    DashboardComponent,
    AdminDashboardComponent,
    CartComponent,
    UserCartComponent,
    UserCartSummaryComponent,
    UserCartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ cart: cartReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
