import { FinanceLogEntity } from '../entity/finance-log.entity';
import { Repository } from 'typeorm';
import { Transaction } from './models/transaction';
export declare class UsersService {
    private FinanceLogRepository;
    constructor(FinanceLogRepository: Repository<FinanceLogEntity>);
    getTransactions(): Promise<FinanceLogEntity[]>;
    addTransaction(t: Transaction): Promise<number>;
}
