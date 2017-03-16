import { Component} from '@angular/core';
import { RouteNames } from './Services/routenames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routeName:any = "Dashboard";
  constructor(private _routeNames:RouteNames){
    this._routeNames.name.subscribe(n => this.routeName = n);
  }

  public title = 'app works!';
}
