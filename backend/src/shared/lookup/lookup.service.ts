import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

@Injectable()
export class LookupService {
  constructor(
    @InjectRepository(AccountEntity)
    private accountRepository: Repository<AccountEntity>,
    @InjectRepository(ByEntity)
    private byRepository: Repository<ByEntity>,
    @InjectRepository(ForEntity)
    private forRepository: Repository<ForEntity>,
    @InjectRepository(TransactionTypeEntity)
    private transactionTypeRepository: Repository<TransactionTypeEntity>,
    @InjectRepository(PlannedEntity)
    private plannedRepository: Repository<PlannedEntity>,
    @InjectRepository(RatingEntity)
    private ratingRepository: Repository<RatingEntity>,
    @InjectRepository(Category1Entity)
    private category1Repository: Repository<Category1Entity>,
    @InjectRepository(Category2Entity)
    private category2Repository: Repository<Category2Entity>,
    @InjectRepository(Category3Entity)
    private Category3Repository: Repository<Category3Entity>,
  ) {}

  async getAllLookups(): Promise<Lookup | undefined> {
    return {
      accounts: await this.accountRepository.find(),
      bys: await this.byRepository.find(),
      fors: await this.forRepository.find(),
      transactionTypes: await this.transactionTypeRepository.find(),
      planneds: await this.plannedRepository.find(),
      ratings: await this.ratingRepository.find(),
      category1s: await this.category1Repository.find(),
      category2s: await this.category2Repository.find(),
      category3s: await this.Category3Repository.find()
    } as unknown as Lookup;
  }

  async addLookup(a: { lookup: string, lookupName: string }) {
    switch (a.lookup) {
      case 'account':
        await this.accountRepository.insert({
          name: a.lookupName,
          sortOrder: 1,
          isActive: true
        });
        break;
        case 'by':
          await this.byRepository.insert({
            name: a.lookupName,
            sortOrder: 1,
            isActive: true
          });
          break;
          case 'for':
            await this.forRepository.insert({
          name: a.lookupName,
          sortOrder: 1,
          isActive: true
        });
        break;
        case 'transactionType':
          await this.transactionTypeRepository.insert({
          name: a.lookupName,
          sortOrder: 1,
          isActive: true
        });
        break;
        case 'rating':
          await this.ratingRepository.insert({
          name: a.lookupName,
          sortOrder: 1,
          isActive: true
        });
        break;
        case 'category1':
          await this.category1Repository.insert({
          name: a.lookupName,
          sortOrder: 1,
          isActive: true
        });
        break;
        case 'category2':
          await this.category2Repository.insert({
          name: a.lookupName,
          sortOrder: 1,
          isActive: true
        });
        break;
        case 'category3':
          await this.Category3Repository.insert({
          name: a.lookupName,
          sortOrder: 1,
          isActive: true
        });
        break;
        case 'planned':
          await this.plannedRepository.insert({
          name: a.lookupName,
          sortOrder: 1,
          isActive: true
        });
        break;
    
      default:
        break;
    }

    return this.getAllLookups();
  }
}
