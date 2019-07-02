import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {CarService} from '../providers/car/car.service';
import {CardCarComponent} from './card-car/card-car.component';
import {CreateCarComponent} from './create-car/create-car.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {ListCarsComponent} from './list-cars/list-cars.component';
import {RentCarComponent} from './rent-car/rent-car.component';

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
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxSkeletonLoaderModule
  ],
  providers: [
    CarService
  ]
})
export class DashboardModule { }
