import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/Product';

import { cartState } from '../reducers/cart.reducer';

export const getState = createFeatureSelector<cartState>('cart');

export const getCartCount = createSelector(getState, (state) =>
  state.products.reduce((prev, next) => prev + next.count, 0)
);

export const getCartProducts = createSelector(
  getState,
  (state) => state.products
);

export const getShipmentPrice = createSelector(
  getState,
  (state) => state.cartShipment
);

export const getWithoutDuplicates = createSelector(getState, (state) =>
  state.products.filter((el, index) => state.products.indexOf(el) == index)
);

export const getDuplicates = (product: Product) =>
  createSelector(getState, (state) =>
    state.products.filter((el) => el.id == product.id)
  );

export const getProductsPrice = createSelector(getState, (state) =>
  state.products.reduce((prev, next) => prev + next.price * next.count, 0)
);
