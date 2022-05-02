import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req, next): any {
    return this.authService.currUser.pipe(
      take(1),
      exhaustMap((user) => {
        // Ensure we have a user
        if (!user) return next.handle(req);

        // Modify the req to pass access token
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token),
        });

        // Return the modified request
        return next.handle(modifiedReq);
      })
    );
  }
}
