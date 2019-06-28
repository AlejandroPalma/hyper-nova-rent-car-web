import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {LoginComponent} from './login/login.component';
import {OnboardingRoutingModule} from './onboarding-routing.module';
import {OnboardingComponent} from './onboarding.component';
import {SignUpComponent} from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    OnboardingComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class OnboardingModule { }
