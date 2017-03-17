import { Component } from '@angular/core';
import { RouteNames } from '../Services/index';


@Component({
  selector: 'app-userprofile',
  templateUrl: 'userprofile.component.html'
})
export class UserProfileComponent {
 constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('User Profile');;
  }
}
