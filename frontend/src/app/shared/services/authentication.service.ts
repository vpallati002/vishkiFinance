import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpTokenService } from './http-token.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public redirectUrl: string[] = [];

  public jwtHelper: JwtHelperService;

  constructor(
    private httpTokenService: HttpTokenService,
    private router: Router
  ) {
    this.jwtHelper = new JwtHelperService();
  }

  login(email: string, password: string): Observable<any> {
    return this.httpTokenService
      .post('api/token/authenticate', {
        email,
        password,
      })
      .pipe(tap((e) => this.saveToken(e)));
  }

  refreshToken(): Observable<any> {
    return this.httpTokenService
      .post('api/token/refresh', {
        token: sessionStorage.getItem('refresh_token'),
      })
      .pipe(tap((e) => this.saveToken(e)));
  }

  private saveToken(data: any) {
    sessionStorage.setItem('id_token', data.access_token);
    sessionStorage.setItem('refresh_token', data.refresh_token);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('user', data.user);
  }

  public get getToken(): string {
    return sessionStorage.getItem('id_token') as string;
  }

  public get getRefreshToken(): string {
    return sessionStorage.getItem('refresh_token') as string;
  }

  public hasRefreshTokenExpired(): boolean {
    return this.jwtHelper.isTokenExpired(this.getRefreshToken);
  }

  public hasIdTokenExpired(): boolean {
    return this.jwtHelper.isTokenExpired(this.getToken);
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.clear();

    this.router
      .navigate(['//login'])
      .then(() => console.log('navigated to login'));
  }
}
