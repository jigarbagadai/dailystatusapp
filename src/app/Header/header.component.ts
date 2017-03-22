import { Component } from '@angular/core';
import { AuthenticationService } from '../Services/index';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  userName: string = "";
  constructor(private authSerivce: AuthenticationService) {
    
  }

  ngOnInit() {
    this.userName = this.authSerivce.loggedInUserName;
  }
}
