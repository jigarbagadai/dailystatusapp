import { Component } from '@angular/core';
import { RouteNames } from '../../Services/index';

@Component({
  selector: 'app-timereport',
  templateUrl: 'timereport.component.html'
})
export class TimeReportComponent {
constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Time Report');;
  }
}
