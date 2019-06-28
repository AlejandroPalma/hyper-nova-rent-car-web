import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../interfaces/user';
import {AuthService} from '../../providers/auth/auth.service';
import {UserService} from '../../providers/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    
    console.log(this.router.url);

    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.email
        ])),

        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]))
      }
    );
  }

  public onSubmit(): void {

    this.authService.login(
      this.loginForm.controls['email'].value,
      this.loginForm.controls['password'].value
    ).then((credentials: firebase.auth.UserCredential) => {

      this.userService.getByKey(credentials.user.uid).subscribe((user: User) => {

        this.userService.user = user;

        this.router.navigate(['/dashboard']);
      });
    });
  }

}
