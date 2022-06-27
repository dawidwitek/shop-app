import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './views/user-login/user-login.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { UserOrdersComponent } from './views/user-orders/user-orders.component';

@NgModule({
  declarations: [UserLoginComponent, UserDashboardComponent, UserProfileComponent, UserOrdersComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
