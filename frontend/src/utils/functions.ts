import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';

export function getApiRoute() {
  environment.apiUrl;
}

export function tokenGetter() {
  const jwtHelper = new JwtHelperService();
  const idToken = sessionStorage.getItem('id_token') as string;
  return jwtHelper.isTokenExpired(idToken)
    ? sessionStorage.getItem('refresh_token')
    : idToken;
}
