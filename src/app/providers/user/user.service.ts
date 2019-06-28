import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {User} from 'src/app/interfaces/user';

const tableName: string = '/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: Observable<User>;
  private loggedUser: User;

  constructor(
    private firebaseDatabase: AngularFireDatabase
  ) { }

  public setLoggedUser(user: User) {

    this.loggedUser = user;
  }

  public getLoggedUser(): User {

    return this.loggedUser;
  }

  public getAll(): Observable<Array<User>> {

    return this.firebaseDatabase.object<Array<User>>(tableName).valueChanges();
  }

  public getByKey(key: string): Observable<User> {

    return this.users = this.firebaseDatabase.object<User>(`${tableName}/${key}`).valueChanges();
  }

  public async setUser(user: User): Promise<User> {

    return this.firebaseDatabase.list(tableName).set(user.idUser,
      user).then(() => {

        return Promise.resolve(user);
    });
  }
}
