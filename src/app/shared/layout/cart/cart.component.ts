import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartState } from 'src/app/store/reducers/cart.reducer';
import { getCartCount } from 'src/app/store/selectors/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProductsCount$!: Observable<number>;

  constructor(private store: Store<{ cart: cartState }>) {}

  ngOnInit(): void {
    this.cartProductsCount$ = this.store.select(getCartCount);
  }
}
