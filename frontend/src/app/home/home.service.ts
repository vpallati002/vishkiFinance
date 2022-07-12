import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { HttpTokenService } from '../shared/services/http-token.service';
@Injectable()
export class HomeService {
  constructor(private HttpTokenService: HttpTokenService) {}

  getUsers(): Observable<any> {
    return this.HttpTokenService.get('api/users/get').pipe(map((res) => res));
  }

}
