import { Entity } from 'typeorm';
import { LookupEntity } from './lookup.entity';

@Entity({ schema: 'vishkifinance', name: 'lookup_planned' })
export class PlannrdEntity extends LookupEntity {}
  