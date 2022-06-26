import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CartComponent } from './layout/cart/cart.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, RouterModule],
  declarations: [CartComponent, NavigationComponent, HeaderComponent],
  exports: [CartComponent, HeaderComponent, NavigationComponent, RouterModule],
})
export class SharedModule {}
