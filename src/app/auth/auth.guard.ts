import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { take, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route, state): any {
    return this.authService.currUser.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user;

        return isAuth ? true : this.router.createUrlTree(['auth']);
      })
    );
  }
}
