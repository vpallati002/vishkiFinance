import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
} from 'typeorm';
import { ByEntity } from './by.lookup.entity';
import { Category1Entity } from './category1.lookup.entity';
import { Category2Entity } from './category2.lookup.entity';
import { Category3Entity } from './category3.lookup.entity';
import { ForEntity } from './for.lookup.entity';
import { PlannrdEntity } from './planned.lookup.entity';
import { RatingEntity } from './rating.lookup.entity';
import { TransactionTypeEntity } from './transaction_type.lookup.entity';

@Entity({ schema: 'vishkifinance', name: 'financial_log' })
export class FinanceLogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column()
  isActive: boolean; 

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

  @Column()
  review: string;

  @ManyToOne(() => PlannrdEntity)
  planned: PlannrdEntity;

  @ManyToOne(() => RatingEntity)
  rating: RatingEntity;
  
}
  