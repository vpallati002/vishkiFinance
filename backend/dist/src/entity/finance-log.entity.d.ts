import { AccountEntity } from './account.lookup.entity';
import { ByEntity } from './by.lookup.entity';
import { Category1Entity } from './category1.lookup.entity';
import { Category2Entity } from './category2.lookup.entity';
import { Category3Entity } from './category3.lookup.entity';
import { ForEntity } from './for.lookup.entity';
import { PlannedEntity } from './planned.lookup.entity';
import { RatingEntity } from './rating.lookup.entity';
import { TransactionTypeEntity } from './transaction_type.lookup.entity';
export declare class FinanceLogEntity {
    id: number;
    account: AccountEntity;
    created: Date;
    by: ByEntity;
    for: ForEntity;
    transactionType: TransactionTypeEntity;
    category1: Category1Entity;
    category2: Category2Entity;
    category3: Category3Entity;
    ammount: number;
    review: string;
    planned: PlannedEntity;
    rating: RatingEntity;
}
