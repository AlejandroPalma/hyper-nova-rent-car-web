import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../providers/auth/auth.service';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUp: FormGroup;
  public hide: boolean = true;
  public genders: Array<string> = ['Mujer', 'Hombre'];
  public idTypes: Array<string> = ['Cédula', 'Pasaporte'];

  constructor(
    private signBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.signUp = this.signBuilder.group(
      {
        name: new FormControl('', Validators.compose([
          Validators.required
        ])),
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.email
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ])),
        birthDate: new FormControl('', Validators.compose([
          Validators.required
        ])),
        idType: new FormControl('', Validators.compose([
          Validators.required
        ])),
        id: new FormControl('', Validators.compose([
          Validators.required
        ])),
        gender: new FormControl('', Validators.compose([
          Validators.required
        ]))

      }
    );
  }

  public onSubmit(): void {

    const user: User = {
      name: this.signUp.controls['name'].value,
      email: this.signUp.controls['email'].value,
      password: this.signUp.controls['password'].value,
      birthDate: this.signUp.controls['birthDate'].value,
      idType: this.signUp.controls['idType'].value,
      id: this.signUp.controls['id'].value,
      gender: this.signUp.controls['gender'].value
    };

    this.authService.signUp(user).then(() => {

      this.router.navigate(['/']);
    });
  }

}
