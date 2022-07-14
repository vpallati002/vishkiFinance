import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Transaction } from '../shared/models/transaction';
import { HttpTokenService } from '../shared/services/http-token.service';
@Injectable()
export class HomeService {
  constructor(private HttpTokenService: HttpTokenService) {}

  getUsers(): Observable<any> {
    return this.HttpTokenService.get('api/users/get').pipe(map((res) => res));
  }

  postTransaction(model: Transaction) {
      return this.HttpTokenService.post('api/users/addTransaction', model);
  }

  addLookup(l: string, lookupName: string) {
    return this.HttpTokenService.post('api/users/addLookup', { lookup: l, lookupName: lookupName });
  }
}
