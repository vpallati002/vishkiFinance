import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /**

     * if in any case id_token or refresh_token are missing

     */

    if (
      !this.authenticationService.getToken ||
      !this.authenticationService.getRefreshToken
    ) {
      // store the requested url to facilitate redirection in landing page

      //this.authenticationService.redirectUrl.push(state.url);
      sessionStorage.setItem('redirectUrl', state.url);

      return this.router.navigate(['']);
    }

    /**

     * if id_token is VALID but refresh token is VALID

     */

    if (
      !this.authenticationService.hasIdTokenExpired() &&
      !this.authenticationService.hasRefreshTokenExpired()
    ) {
      return true;
    }

    /**

     * if id_token is EXPIRED but refresh_token is NOT EXPIRED yet

     */

    if (
      this.authenticationService.hasIdTokenExpired() &&
      !this.authenticationService.hasRefreshTokenExpired()
    ) {
      // refreshToken

      return this.authenticationService.refreshToken();
    } else {
      // reauthenticate

      //this.authenticationService.redirectUrl.push(state.url);
      sessionStorage.setItem('redirectUrl', state.url);

      return this.router.navigate(['']);
    }
  }
}
