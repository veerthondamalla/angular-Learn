import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router, private authserv: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
      if(!this.authserv.isUserLoggedIn()){
        alert('You are not allowed to view this page. You are redirected to login Page');
        this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
        return false;

      }
      return true;


  }
}
