import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/Product';
import { cartState } from 'src/app/store/reducers/cart.reducer';
import { getCartProducts } from 'src/app/store/selectors/cart.selector';

@Component({
  selector: 'app-user-cart-item',
  templateUrl: './user-cart-item.component.html',
  styleUrls: ['./user-cart-item.component.scss'],
})
export class UserCartItemComponent implements OnInit {
  @Input() cartProduct!: Product;
  @Output() updateItemEvent = new EventEmitter<{
    selectedValue: string;
    productID: string;
  }>();
  @Output() deleteItemEvent = new EventEmitter<string>();

  productsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private store: Store<{ cart: cartState }>) {}

  ngOnInit(): void {}

  onClickDelete(itemID: string) {
    this.deleteItemEvent.emit(itemID);
  }

  onClickUpdate(selectedValue: string, productID: string) {
    this.updateItemEvent.emit({ selectedValue, productID });
  }
}
