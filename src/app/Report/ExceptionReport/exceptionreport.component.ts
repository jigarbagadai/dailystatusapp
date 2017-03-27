import { Component } from '@angular/core';
import { RouteNames } from '../../Services/index';

@Component({
  selector: 'app-exceptionreport',
  templateUrl: 'exceptionreport.component.html'
})
export class ExceptionReportComponent {
constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Exception Report');
    this._routeNames.displayHeader.next(true);
  }
}
