import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authService.getCurrentUser().getValue(); // modification ici
    console.log('currentUser', currentUser); // debug
    if (currentUser && currentUser.isAdmin) {
      console.log('isAdmin', currentUser.isAdmin); // debug
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}


