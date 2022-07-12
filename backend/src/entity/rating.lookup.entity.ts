import { Entity } from 'typeorm';
import { LookupEntity } from './lookup.entity';

@Entity({ schema: 'vishkifinance', name: 'lookup_rating' })
export class RatingEntity extends LookupEntity {}
  