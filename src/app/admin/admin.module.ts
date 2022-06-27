import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import { AdminSettingsComponent } from './views/admin-settings/admin-settings.component';
import { AdminLoginComponent } from './views/admin-login/admin-login.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminSettingsComponent,
    AdminLoginComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
