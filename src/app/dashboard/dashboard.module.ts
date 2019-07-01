import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material';
import {CarService} from '../providers/car/car.service';
import {CardCarComponent} from './card-car/card-car.component';
import {CreateCarComponent} from './create-car/create-car.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {ListCarsComponent} from './list-cars/list-cars.component';
import { RentCarComponent } from './rent-car/rent-car.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ListCarsComponent,
    CardCarComponent,
    CreateCarComponent,
    RentCarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule
  ],
  providers: [
    CarService
  ]
})
export class DashboardModule { }
