import { Component } from '@angular/core';
import { RouteNames } from '../Services/routenames.service';


@Component({
  selector: 'app-timeentry',
  templateUrl: 'timeentry.component.html'
})
export class TimeEntryComponent {
 constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Time Entry');;
  }
}
