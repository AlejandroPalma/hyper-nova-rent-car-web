import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Rent} from 'src/app/interfaces/rent';

const tableName: string = '/rents';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  public rents: Observable<Rent>;

  constructor(
    private firebaseDatabase: AngularFireDatabase
  ) { }

  public getAll(): Observable<Array<Rent>> {

    return this.firebaseDatabase.object<Array<Rent>>(tableName).valueChanges();
  }

  public getByKey(key: string): Observable<Rent> {

    return this.rents = this.firebaseDatabase.object<Rent>(`${tableName}/${key}`).valueChanges();
  }

  public async createRent(rent: Rent): Promise<Rent> {

    const rentRef: AngularFireList<Rent> = this.firebaseDatabase.list(tableName);

    rent.rentId = (await rentRef.push(rent)).key;

    return this.updateRent(rent);
  }

  public async updateRent(rent: Rent): Promise<Rent> {

    return this.firebaseDatabase.list(tableName).update(rent.rentId,
      rent).then(() => {

        return Promise.resolve(rent);
    });
  }

}
