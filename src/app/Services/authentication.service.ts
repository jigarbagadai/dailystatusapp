import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AppConstant } from '../app.constant';
import { ApiUrlConstant } from './apiurl.constant';


@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem(AppConstant.CURRENTUSERKEY));
    this.token = currentUser && currentUser.access_token;
  }

  login(username: string, password: string): Observable<boolean> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(ApiUrlConstant.LOGINURL, 'username=' + username + '&password=' + password + '&grant_type=password', {
      headers: headers
    })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json();
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(AppConstant.CURRENTUSERKEY, JSON.stringify({ username: username, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem(AppConstant.CURRENTUSERKEY);
  }
}