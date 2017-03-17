import { Component } from '@angular/core';
import { RouteNames } from '../../Services/index';


@Component({
  selector: 'app-activity',
  templateUrl: 'activity.component.html'
})
export class ActivityComponent {
 constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Activity');;
  }
}
