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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const finance_log_entity_1 = require("../entity/finance-log.entity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(FinanceLogRepository) {
        this.FinanceLogRepository = FinanceLogRepository;
    }
    async getTransactions() {
        let c = await this.FinanceLogRepository.find();
        console.log(c);
        return c;
    }
    async addTransaction(t) {
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
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(finance_log_entity_1.FinanceLogEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map