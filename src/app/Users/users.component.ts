import { Component } from '@angular/core';
import { RouteNames } from '../Services/index';


@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent {
 constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Users');
    this._routeNames.displayHeader.next(true);
  }
}
