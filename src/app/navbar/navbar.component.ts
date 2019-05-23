import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: User;

  constructor(public router: Router,
              private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(x => x ? this.currentUser = x : null);
  }

  ngOnInit() {
  }

  logout() {
    this.currentUser = null;
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
