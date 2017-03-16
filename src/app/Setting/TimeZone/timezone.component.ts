import { Component } from '@angular/core';
import { RouteNames } from '../../Services/routenames.service';


@Component({
  selector: 'app-timezone',
  templateUrl: 'timezone.component.html'
})
export class TimeZoneComponent {
 constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Time Zone');;
  }
}
