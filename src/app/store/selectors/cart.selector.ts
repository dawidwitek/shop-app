import { createFeatureSelector, createSelector } from '@ngrx/store';
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

export const getProductsPrice = createSelector(getState, (state) =>
  state.products.reduce((prev, next) => prev + next.price * next.count, 0)
);
