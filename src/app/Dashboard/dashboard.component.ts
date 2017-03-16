import { Component } from '@angular/core';
import { RouteNames } from '../Services/routenames.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
 constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Dashboard');;
  }
}
