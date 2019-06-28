import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UserService} from '../providers/user/user.service';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule { }
