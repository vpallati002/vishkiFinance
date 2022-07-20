"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const account_lookup_entity_1 = require("../../entity/account.lookup.entity");
const typeorm_2 = require("typeorm");
const by_lookup_entity_1 = require("../../entity/by.lookup.entity");
const for_lookup_entity_1 = require("../../entity/for.lookup.entity");
const transaction_type_lookup_entity_1 = require("../../entity/transaction_type.lookup.entity");
const planned_lookup_entity_1 = require("../../entity/planned.lookup.entity");
const rating_lookup_entity_1 = require("../../entity/rating.lookup.entity");
const category1_lookup_entity_1 = require("../../entity/category1.lookup.entity");
const category2_lookup_entity_1 = require("../../entity/category2.lookup.entity");
const category3_lookup_entity_1 = require("../../entity/category3.lookup.entity");
let LookupService = class LookupService {
    constructor(accountRepository, byRepository, forRepository, transactionTypeRepository, plannedRepository, ratingRepository, category1Repository, category2Repository, Category3Repository) {
        this.accountRepository = accountRepository;
        this.byRepository = byRepository;
        this.forRepository = forRepository;
        this.transactionTypeRepository = transactionTypeRepository;
        this.plannedRepository = plannedRepository;
        this.ratingRepository = ratingRepository;
        this.category1Repository = category1Repository;
        this.category2Repository = category2Repository;
        this.Category3Repository = Category3Repository;
    }
    async getAllLookups() {
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
        };
    }
    async addLookup(a) {
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
};
LookupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(account_lookup_entity_1.AccountEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(by_lookup_entity_1.ByEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(for_lookup_entity_1.ForEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(transaction_type_lookup_entity_1.TransactionTypeEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(planned_lookup_entity_1.PlannedEntity)),
    __param(5, (0, typeorm_1.InjectRepository)(rating_lookup_entity_1.RatingEntity)),
    __param(6, (0, typeorm_1.InjectRepository)(category1_lookup_entity_1.Category1Entity)),
    __param(7, (0, typeorm_1.InjectRepository)(category2_lookup_entity_1.Category2Entity)),
    __param(8, (0, typeorm_1.InjectRepository)(category3_lookup_entity_1.Category3Entity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], LookupService);
exports.LookupService = LookupService;
//# sourceMappingURL=lookup.service.js.map