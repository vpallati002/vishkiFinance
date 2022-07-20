import { LookupService } from '../shared/lookup/lookup.service';
import { Transaction } from './models/transaction';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    private lookupService;
    constructor(userService: UsersService, lookupService: LookupService);
    checkDuplicateEmail(): Promise<import("../entity/finance-log.entity").FinanceLogEntity[]>;
    addUser(a: Transaction): Promise<number>;
    addLookup(a: {
        lookup: string;
        lookupName: string;
    }): Promise<import("../shared/lookup/models/lookup").Lookup>;
}
