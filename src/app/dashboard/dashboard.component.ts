import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../interfaces/user';
import {AuthService} from '../providers/auth/auth.service';
import {UserService} from '../providers/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public user: User;

  constructor(
    private userService: UserService, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    
    this.user = this.userService.getloggedUser();
    
  }

  public logOut(): void {
    var answer = confirm('Estas seguro de querer salir del Sistema?');
    if(answer){
      this.authService.logOut().then(() => {
      this.router.navigate(['/onboarding']);
      });
    }
  }
}
