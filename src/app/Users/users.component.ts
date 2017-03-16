import { Component } from '@angular/core';
import { RouteNames } from '../Services/routenames.service';


@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent {
 constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Users');;
  }
}
