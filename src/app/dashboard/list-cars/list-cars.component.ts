import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Car} from 'src/app/interfaces/car';
import {CarService} from 'src/app/providers/car/car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  public cars: Observable<Array<Car>>;

  constructor(
    private router: Router,
    private carService: CarService
  ) { }

  public ngOnInit(): void {

    this.cars = this.carService.getAll();
  }

  public filterCars(cars: object, status: string): Array<Car> {

    const carsArray: Array<Car> = new Array();

    Object.keys(cars).forEach((key: string) => {

      carsArray.push(cars[key]);
    });

    return carsArray.filter((car: Car) => {

      return car.status === status;
    });
  }

  public rentACar(car: Car): void {

    const extraInfo: NavigationExtras = {
      queryParams: {
        carId: car.carId
      }
    };

    this.router.navigate(['dashboard/rent-car'], extraInfo);
  }

}
