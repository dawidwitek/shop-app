import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  observ!: boolean;
  constructor(private service: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    console.log(this.service.isAuthenticated);
    console.log(this.service.isAuthenticated.pipe(map((el) => el)));
    this.service.isAuthenticated.pipe(
      tap((el) => {
        if (el) {
          this.router.navigate(['/dashboard']);
        }
      }),
      map((el) => !el)
    );

    return true;
  }
}
