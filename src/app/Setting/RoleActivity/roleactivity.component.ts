import { Component } from '@angular/core';
import { RouteNames } from '../../Services/index';


@Component({
  selector: 'app-roleactivity',
  templateUrl: 'roleactivity.component.html'
})
export class RoleActivityComponent {
 constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Role Activity');
    this._routeNames.displayHeader.next(true);
  }
}
