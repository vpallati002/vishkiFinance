import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
} from 'typeorm';
import { AccountEntity } from './account.lookup.entity';
import { ByEntity } from './by.lookup.entity';
import { Category1Entity } from './category1.lookup.entity';
import { Category2Entity } from './category2.lookup.entity';
import { Category3Entity } from './category3.lookup.entity';
import { ForEntity } from './for.lookup.entity';
import { PlannedEntity } from './planned.lookup.entity';
import { RatingEntity } from './rating.lookup.entity';
import { TransactionTypeEntity } from './transaction_type.lookup.entity';

@Entity({ schema: 'vishkifinance', name: 'financial_log' })
export class FinanceLogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => AccountEntity)
  account: AccountEntity;

  @Column({ type: 'timestamptz' })
  created: Date;

  @ManyToOne(() => ByEntity)
  by: ByEntity;

  @ManyToOne(() => ForEntity)
  for: ForEntity;

  @ManyToOne(() => TransactionTypeEntity)
  transactionType: TransactionTypeEntity;

  @ManyToOne(() => Category1Entity)
  category1: Category1Entity;

  @ManyToOne(() => Category2Entity)
  category2: Category2Entity;

  @ManyToOne(() => Category3Entity)
  category3: Category3Entity;

  @Column({ type: "double precision" })
  ammount: number;

  @Column({nullable: true})
  review: string;

  @ManyToOne(() => PlannedEntity)
  planned: PlannedEntity;

  @ManyToOne(() => RatingEntity)
  rating: RatingEntity;
  
}
  