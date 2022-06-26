import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/product.service';

import { addToCart } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.scss'],
})
export class SingleProductDetailsComponent implements OnInit, OnDestroy {
  productDetails!: Product;
  productDetailsSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private store: Store<Product>
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.productDetailsSub = this.service
        .getProductById(id)
        .subscribe((data) => {
          this.productDetails = data;
        });
    }
  }

  onAdd() {
    this.store.dispatch(
      addToCart({
        product: this.productDetails,
      })
    );
  }

  ngOnDestroy(): void {
    this.productDetailsSub.unsubscribe();
  }
}
