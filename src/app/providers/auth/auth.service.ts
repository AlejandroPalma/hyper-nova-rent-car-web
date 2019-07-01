import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(
    private firebaseAuth: AngularFireAuth,
    public afAuth:AngularFireAuth,
    private router: Router
  ) { }

  public async signUp(user: User): Promise<firebase.auth.UserCredential> {

    return await this.firebaseAuth.auth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
  }

  public async login(email: string, password: string): Promise<firebase.auth.UserCredential> {

    return await this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password);
  }

  public logOut(){
    return this.afAuth.auth.signOut().then(() => {
    this.router.navigate(['sign-in']);
    })
  }
}
