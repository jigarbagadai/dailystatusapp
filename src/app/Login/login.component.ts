import { Component } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthenticationService } from '../Services/index';
import { Subscription } from 'rxjs';
import { RouteNames } from '../Services/index';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  model: any = {};
  error = '';
  busy: Subscription;
  returnUrl: string;

  constructor(private route: ActivatedRoute,private router: Router, private authSerivce: AuthenticationService,private _routeNames:RouteNames) {
     this._routeNames.displayHeader.next(false);
  }

  ngOnInit() {
    this.authSerivce.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  login() {
    this.busy = this.authSerivce.login(this.model.username, this.model.password).subscribe(
      result => {
        if (result === true) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.error = "User name and password is incorrect";
        }
      },
      error => {
          this.error = "User name and password is incorrect";
      }
    )
  }
}
