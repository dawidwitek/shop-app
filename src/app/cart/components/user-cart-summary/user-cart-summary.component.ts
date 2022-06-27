import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { cartState } from 'src/app/store/reducers/cart.reducer';
import {
  getProductsPrice,
  getShipmentPrice,
} from 'src/app/store/selectors/cart.selector';

@Component({
  selector: 'app-user-cart-summary',
  templateUrl: './user-cart-summary.component.html',
  styleUrls: ['./user-cart-summary.component.scss'],
})
export class UserCartSummaryComponent implements OnInit {
  productsPrice$!: Observable<number>;
  shipmentPrice$!: Observable<number>;

  constructor(private store: Store<{ cart: cartState }>) {}

  ngOnInit(): void {
    this.productsPrice$ = this.store.select(getProductsPrice);
    this.shipmentPrice$ = this.store.select(getShipmentPrice);
  }
}
