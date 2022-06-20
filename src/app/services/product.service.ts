import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductDto } from '../Product';
import { AppState } from '../Cart';
import { Action, Store } from '@ngrx/store';
import { cartState } from '../store/reducers/cart.reducer';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private store: Store<{ cart: cartState }>
  ) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductDto[]>('http://localhost:3000/products')
      .pipe(
        map((products) => products.map((product) => ({ ...product, count: 1 })))
      );
  }

  getProductById(id: number): Observable<Product> {
    return this.http
      .get<ProductDto>(`http://localhost:3000/products/${id}`)
      .pipe(map((product) => ({ ...product, count: 1 })));
  }
}
