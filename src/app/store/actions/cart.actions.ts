import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/Product';

export const addToCart = createAction(
  '[Cart Page] Add product to cart',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Cart Page] Delete product from cart',
  props<{ productID: string }>()
);

export const updateProduct = createAction(
  '[Cart Page] Update product from cart',
  props<{ selectedValue: string; productID: string }>()
);
