import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AppConstant } from '../app.constant';
import { ApiUrlConstant } from './apiurl.constant';
import { Observable } from 'rxjs/Observable';
import { apiresponse } from '../Model/index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoleService {
  private sessiontoken: string;
  constructor(private http: Http) {
    var tokenResponse = JSON.parse(localStorage.getItem(AppConstant.CURRENTUSERKEY));
    this.sessiontoken = 'Bearer ' + tokenResponse.token.access_token;
  }

  getAllRoles(serachtext: string, isActive: boolean, skiprecords: number, pagesize: number, orderDirection: string, orderColumn: string): Observable<apiresponse> {
    var headers = new Headers();
    headers.append('Authorization', this.sessiontoken);

    return this.http.get(ApiUrlConstant.GETALLROLESURL + '/' + serachtext + '/' + isActive + '/' + skiprecords + '/' + pagesize + '/' + orderDirection + '/' + orderColumn, {
      headers: headers
    }).map((response: Response) => {
      let roles = response.json();
      return roles;
    });
  }

}