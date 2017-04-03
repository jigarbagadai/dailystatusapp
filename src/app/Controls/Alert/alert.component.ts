import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../Services/alert.service'

@Component({
  selector: 'alert',
  templateUrl: 'alert.component.html',
  styles: [`
    #alertmessage
    {
      position: fixed;
      top: 0px;
      width: 50%;
      z-index: 2000;
      height: 35px;
      padding: 5px;
      padding-left: 10px;
    }
  `]
})

export class AlertComponent implements OnInit {
  message: any

  constructor(private alertService: AlertService) {

  }

  ngOnInit() {
    this.alertService.getMessage().subscribe(
      message => { this.message = message; }
    );
  }

  CloseMessage() {
    this.message = "";
  }
}