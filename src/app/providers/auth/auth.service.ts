import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/interfaces/user';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: AngularFireList<User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private firebaseDatabase: AngularFireDatabase) {

      this.users = this.firebaseDatabase.list('/users');
    }

  public async signUp(user: User): Promise<User> {

    return this.firebaseAuth.auth.createUserWithEmailAndPassword(
      user.email,
      user.password
    ).then((credentials: firebase.auth.UserCredential) => {

      user.idUser = credentials.user.uid;

      this.users.push(user);

      return Promise.resolve(user);
    }).catch(() => {

      return Promise.reject('Signup failed');
    });
  }

  public async login (user:user): Promise<User> { 
    return this.firebaseAuth.auth.signInWithEmailAndPassword(
      user.email,
      user.password
    ).then()
  }
}
