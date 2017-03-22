import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppConstant } from '../app.constant'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem(AppConstant.CURRENTUSERKEY)) {
            // let jsonToken = JSON.parse(localStorage.getItem('currentUser'))
            // let expirationDate = new Date(jsonToken[".expires"]);
            // return expirationDate < new Date() ? true : false;
            return true;
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}