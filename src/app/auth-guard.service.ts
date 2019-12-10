import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (window.sessionStorage.getItem('isLoggedIn') != 'true') {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}