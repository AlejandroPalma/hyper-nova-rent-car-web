import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup; 
  public hide: boolean = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group(
      {
        user: new FormControl('', Validators.compose([
          Validators.required, 
        ])),

        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]))
      }
    );
  }

}
