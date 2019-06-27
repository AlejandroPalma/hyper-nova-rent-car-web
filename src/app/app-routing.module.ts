import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const appRoutes: Routes = [

    {
        path: '',
        loadChildren: './login/login.module#LoginModule'
    },
    {
      path: 'sign-up',
      loadChildren: './sign-up/sign-up.module#SignUpModule'

    }
    
    
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


