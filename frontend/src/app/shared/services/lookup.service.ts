import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Lookup } from '../models/lookup';
import { HttpTokenService } from './http-token.service';

@Injectable()
export class LookupService {
  lookups: Lookup;
  hasLookupDataCached: boolean;
  constructor(private httpTokenService: HttpTokenService) {}

  async populateLookupData() {
    if (this.hasLookupDataCached) {
      return;
    }

    const lookup$ = this.httpTokenService.get('api/lookup');
    this.lookups = await lastValueFrom(lookup$);
    this.hasLookupDataCached = true;
  }

  getAccounts() {
    return this.lookups.accounts.map((c) => {
      return { name: c.name, code: c.id };
    });
  }

  getBys() {
    return this.lookups.bys.map((c) => {
      return { name: c.name, code: c.id };
    });
  }

  getFors() {
    return this.lookups.fors.map((c) => {
      return { name: c.name, code: c.id };
    });
  }

  getTransactionTypes() {
    return this.lookups.transactionTypes.map((c) => {
      return { name: c.name, code: c.id };
    });
  }

  getPlanneds() {
    return this.lookups.planneds.map((c) => {
      return { name: c.name, code: c.id };
    });
  }

  getRatings() {
    return this.lookups.ratings.map((c) => {
      return { name: c.name, code: c.id };
    });
  }

  getCategory1s() {
    return this.lookups.category1s.map((c) => {
      return { name: c.name, code: c.id };
    });
  }

  getCategory2s() {
    return this.lookups.category2s.map((c) => {
      return { name: c.name, code: c.id };
    });
  }

  getCategory3s() {
    return this.lookups.category3s.map((c) => {
      return { name: c.name, code: c.id };
    });
  }

}
