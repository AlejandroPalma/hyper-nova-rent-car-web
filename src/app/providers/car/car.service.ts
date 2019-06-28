import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Car} from 'src/app/interfaces/car';

const tableName: string = '/cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public cars: Observable<Car>;
  private selectedCar: Car;

  constructor(
    private firebaseDatabase: AngularFireDatabase
  ) { }

  public setSelectedCar(car: Car) {

    this.selectedCar = car;
  }

  public getSelectedCar(): Car {

    return this.selectedCar;
  }

  public getAll(): Observable<Array<Car>> {

    return this.firebaseDatabase.object<Array<Car>>(tableName).valueChanges();
  }

  public getByKey(key: string): Observable<Car> {

    return this.cars = this.firebaseDatabase.object<Car>(`${tableName}/${key}`).valueChanges();
  }

  public async setCar(car: Car): Promise<Car> {

    const carRef: AngularFireList<Car> = this.firebaseDatabase.list(tableName);

    car.carId = (await carRef.push(car)).key;

    return this.updateCar(car);
  }

  public async updateCar(car: Car): Promise<Car> {

    return this.firebaseDatabase.list(tableName).update(car.carId,
      car).then(() => {

        return Promise.resolve(car);
    });
  }
}
