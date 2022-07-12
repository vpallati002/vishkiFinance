import { Entity } from 'typeorm';
import { LookupEntity } from './lookup.entity';

@Entity({ schema: 'vishkifinance', name: 'lookup_transaction_type' })
export class TransactionTypeEntity extends LookupEntity {}
  