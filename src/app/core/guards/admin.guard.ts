import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
  
    return this.isAdmin();
  }

  private isAdmin() {
    if (this.authService.usuarioIsAdmin() || localStorage.getItem("isAdmin") ) {
      return true;
    }

    this.router.navigate(['/login']);

    return false
  }
}

