import { Entity } from 'typeorm';
import { LookupEntity } from './lookup.entity';

@Entity({ schema: 'vishkifinance', name: 'lookup_category3' })
export class Category3Entity extends LookupEntity {}
  