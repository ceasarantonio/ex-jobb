import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../auth.service';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
) {}
  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().map(data => {
      if (!data) {
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
    });
  }
}
