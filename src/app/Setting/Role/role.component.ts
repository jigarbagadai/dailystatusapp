import { Component } from '@angular/core';
import { RouteNames } from '../../Services/index';


@Component({
  selector: 'app-role',
  templateUrl: 'role.component.html'
})
export class RoleComponent {
 constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Role');;
  }
}
