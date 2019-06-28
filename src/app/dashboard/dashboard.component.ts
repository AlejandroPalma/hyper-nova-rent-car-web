import {Component, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {UserService} from '../providers/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.user = this.userService.getLoggedUser();
    console.log(this.user);
  }

}
