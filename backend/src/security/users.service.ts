import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FinanceLogEntity } from '../entity/finance-log.entity';
import { Repository } from 'typeorm';
import { Transaction } from './models/transaction';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(FinanceLogEntity)
    private FinanceLogRepository: Repository<FinanceLogEntity>,
  ) {}

  async getTransactions() {
    let c = await this.FinanceLogRepository.find();
    console.log(c);
    return c;
  }

  async addTransaction(t: Transaction) {
    await this.FinanceLogRepository.insert({
      account: t.account ? { id: t.account } : null,
      created: t.created,
      by: t.by ? { id: t.by } : null,
      for: t.for ? { id: t.for } : null,
      transactionType: t.transactionType ? { id: t.transactionType } : null,
      category1: t.category1 ? { id: t.category1 } : null,
      category2: t.category2 ? { id: t.category2 } : null,
      category3: t.category3 ? { id: t.category3 } : null,
      ammount: t.ammount,
      review: t.review,
      planned: t.planned ? { id: t.planned } : null,
      rating: t.rating ? { id: t.rating } : null
    });
    return (await this.FinanceLogRepository.find()).length;
  }

}
