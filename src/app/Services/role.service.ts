import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppConstant } from '../app.constant';
import { ApiUrlConstant } from './apiurl.constant';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoleService {
  
  constructor(private http: Http) { 
  }

 

}