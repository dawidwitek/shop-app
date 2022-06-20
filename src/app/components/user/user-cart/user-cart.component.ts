import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Product';
import {
  deleteProduct,
  updateProduct,
} from 'src/app/store/actions/cart.actions';

import { cartState } from 'src/app/store/reducers/cart.reducer';
import {
  getCartCount,
  getCartProducts,
} from 'src/app/store/selectors/cart.selector';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss'],
})
export class UserCartComponent implements OnInit {
  cartProductCount$!: Observable<number>;
  cartProducts$!: Observable<Product[]>;

  constructor(private store: Store<{ cart: cartState }>) {}

  ngOnInit(): void {
    this.cartProductCount$ = this.store.select(getCartCount);
    this.cartProducts$ = this.store.select(getCartProducts);
  }

  deleteProduct(productID: string) {
    this.store.dispatch(deleteProduct({ productID }));
  }

  updateProductCount(data: { selectedValue: string; productID: string }) {
    this.store.dispatch(updateProduct(data));
  }
}
