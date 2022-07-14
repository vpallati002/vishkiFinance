import { Entity } from 'typeorm';
import { LookupEntity } from './lookup.entity';

@Entity({ schema: 'vishkifinance', name: 'lookup_account' })
export class AccountEntity extends LookupEntity {}
