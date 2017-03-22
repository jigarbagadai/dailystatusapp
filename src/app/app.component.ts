import { Component} from '@angular/core';
import { RouteNames,AuthGuard } from './Services/index';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routeName:any = "Dashboard";
  displayHeader: boolean;
  constructor(private _routeNames:RouteNames,private authService: AuthGuard, private router: Router){
    this._routeNames.name.subscribe(n => this.routeName = n);
    this.router.events.subscribe(res => {
      if (res.url.indexOf("login")> -1) {
        this.displayHeader = false;
      }
      else
      {
        this.displayHeader = true;
      }
    });
  }

  public title = 'app works!';
}
