import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/Product';
import {
  addToCart,
  deleteProduct,
  updateProduct,
} from '../actions/cart.actions';

export interface cartState {
  cartShipment: number;
  products: Product[];
}

export const initialState: cartState = {
  cartShipment: 20,
  products: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    const productIndex = state.products.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex !== -1) {
      const newProducts = state.products.map((item) => ({ ...item }));
      newProducts[productIndex].count++;

      return { ...state, products: newProducts };
    } else {
      return { ...state, products: [...state.products, product] };
    }
  }),

  on(deleteProduct, (state, { productID }) => {
    return {
      ...state,
      products: [...state.products.filter((item) => item.id !== productID)],
    };
  }),

  on(updateProduct, (state, { selectedValue, productID }) => {
    const productIndex = state.products.findIndex(
      (item) => item.id === productID
    );
    const countProduct = state.products[productIndex].count;
    const newProducts = state.products.map((item) => ({ ...item }));

    if (Number(selectedValue) > countProduct) {
      newProducts[productIndex].count = Number(selectedValue);
      return { ...state, products: newProducts };
    } else if (Number(selectedValue) < countProduct) {
      newProducts[productIndex].count = Number(selectedValue);
      return { ...state, products: newProducts };
    } else {
      return {
        ...state,
        products: [...state.products],
      };
    }
  })
);
