import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  template: `
  <div class="container">
    <h1>Profile page</h1>
    <h5>Username: </h5> {{displayName}}
    <h5>E-Mail: </h5> {{email}}
  </div>
  `
})
export class ProfilePageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
   const user = this.getUser();

    if (!user) {
      this.router.navigateByUrl('/login');
    }

    this.setData(user.displayName, user.email); 
  }

  displayName: string;
  email: string;

  setData(name, email) {
    this.displayName = name;
    this.email = email;
  }

  getUser() {
    return this.userService.getCurrentUser();
  }

}
