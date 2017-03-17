import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/index';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  model: any = {};
  loading = false;
  error = '';

  constructor(private router: Router, private authSerivce: AuthenticationService) {
  }

  ngOnInit() {
    this.authSerivce.logout();
  }

  login() {
    this.loading = true;
    this.authSerivce.login(this.model.username, this.model.password).subscribe(
      result => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = "User name and password is incorrect";
          this.loading = false;
        }
      }
    )
  }
}
