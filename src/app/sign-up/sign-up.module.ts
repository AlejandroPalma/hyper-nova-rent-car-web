import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {AuthService} from '../providers/auth/auth.service';
import {UserService} from '../providers/user/user.service';
import {SignUpRoutingModule} from './sign-up-routing.module';
import {SignUpComponent} from './sign-up.component';


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule,
    AuthService,
    UserService
  ],

})
export class SignUpModule { }
