import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router) {}
 public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

          
      let user = sessionStorage.getItem("userName");
          let status = localStorage.getItem ('isUserLoggedIn')
          if (user == 'admin@deepersignals.com' && status == 'isUserLoggedIn'){
            // this.router.navigate(['/admin'])
            return this.router.parseUrl('/admin');

          }
          return true
  }
}
