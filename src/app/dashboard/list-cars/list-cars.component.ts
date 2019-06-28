import {Component, OnInit} from '@angular/core';
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

}
