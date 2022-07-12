import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ByEntity } from './by.lookup.entity';
import { Category1Entity } from './category1.lookup.entity';
import { Category2Entity } from './category2.lookup.entity';
import { Category3Entity } from './category3.lookup.entity';
import { FinanceLogEntity } from './finance-log.entity';
import { ForEntity } from './for.lookup.entity';
import { PlannrdEntity } from './planned.lookup.entity';
import { RatingEntity } from './rating.lookup.entity';
import { TransactionTypeEntity } from './transaction_type.lookup.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FinanceLogEntity, 
      ByEntity,
      ForEntity,
      Category1Entity,
      Category2Entity,
      Category3Entity,
      TransactionTypeEntity,
      PlannrdEntity,
      RatingEntity

    ]),
  ],
  exports: [TypeOrmModule],
})
export class EntityModule {}
