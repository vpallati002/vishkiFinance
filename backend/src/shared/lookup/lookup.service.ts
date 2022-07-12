import { Injectable } from '@nestjs/common';
import { Lookup } from './models/lookup';

@Injectable()
export class LookupService {
  constructor(
  ) {}

  async getAllLookups(): Promise<Lookup | undefined> {
    return null;
  }
}
