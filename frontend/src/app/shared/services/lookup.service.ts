import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable, tap } from 'rxjs';
import { HttpTokenService } from './http-token.service';

@Injectable()
export class LookupService {
  hasLookupDataCached: boolean;
  constructor(private httpTokenService: HttpTokenService) {}


}
