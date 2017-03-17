import { Component } from '@angular/core';
import { RouteNames } from '../../Services/index';

@Component({
  selector: 'app-auditreport',
  templateUrl: 'auditreport.component.html'
})
export class AuditReportComponent {
constructor(private _routeNames:RouteNames){
    this._routeNames.name.next('Audit Report');;
  }
}
