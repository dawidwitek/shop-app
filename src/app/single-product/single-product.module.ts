import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductDetailsComponent } from './views/single-product-details/single-product-details.component';
import { SingleProductRoutingModule } from './single-product-routing.module';

@NgModule({
  declarations: [SingleProductDetailsComponent],
  imports: [CommonModule, SingleProductRoutingModule],
})
export class SingleProductModule {}
