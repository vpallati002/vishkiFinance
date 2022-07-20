import { AccountEntity } from '../../entity/account.lookup.entity';
import { Repository } from 'typeorm';
import { Lookup } from './models/lookup';
import { ByEntity } from '../../entity/by.lookup.entity';
import { ForEntity } from '../../entity/for.lookup.entity';
import { TransactionTypeEntity } from '../../entity/transaction_type.lookup.entity';
import { PlannedEntity } from '../../entity/planned.lookup.entity';
import { RatingEntity } from '../../entity/rating.lookup.entity';
import { Category1Entity } from '../../entity/category1.lookup.entity';
import { Category2Entity } from '../../entity/category2.lookup.entity';
import { Category3Entity } from '../../entity/category3.lookup.entity';
export declare class LookupService {
    private accountRepository;
    private byRepository;
    private forRepository;
    private transactionTypeRepository;
    private plannedRepository;
    private ratingRepository;
    private category1Repository;
    private category2Repository;
    private Category3Repository;
    constructor(accountRepository: Repository<AccountEntity>, byRepository: Repository<ByEntity>, forRepository: Repository<ForEntity>, transactionTypeRepository: Repository<TransactionTypeEntity>, plannedRepository: Repository<PlannedEntity>, ratingRepository: Repository<RatingEntity>, category1Repository: Repository<Category1Entity>, category2Repository: Repository<Category2Entity>, Category3Repository: Repository<Category3Entity>);
    getAllLookups(): Promise<Lookup | undefined>;
    addLookup(a: {
        lookup: string;
        lookupName: string;
    }): Promise<Lookup>;
}
