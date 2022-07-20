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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceLogEntity = void 0;
const typeorm_1 = require("typeorm");
const account_lookup_entity_1 = require("./account.lookup.entity");
const by_lookup_entity_1 = require("./by.lookup.entity");
const category1_lookup_entity_1 = require("./category1.lookup.entity");
const category2_lookup_entity_1 = require("./category2.lookup.entity");
const category3_lookup_entity_1 = require("./category3.lookup.entity");
const for_lookup_entity_1 = require("./for.lookup.entity");
const planned_lookup_entity_1 = require("./planned.lookup.entity");
const rating_lookup_entity_1 = require("./rating.lookup.entity");
const transaction_type_lookup_entity_1 = require("./transaction_type.lookup.entity");
let FinanceLogEntity = class FinanceLogEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FinanceLogEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_lookup_entity_1.AccountEntity),
    __metadata("design:type", account_lookup_entity_1.AccountEntity)
], FinanceLogEntity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], FinanceLogEntity.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => by_lookup_entity_1.ByEntity),
    __metadata("design:type", by_lookup_entity_1.ByEntity)
], FinanceLogEntity.prototype, "by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => for_lookup_entity_1.ForEntity),
    __metadata("design:type", for_lookup_entity_1.ForEntity)
], FinanceLogEntity.prototype, "for", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transaction_type_lookup_entity_1.TransactionTypeEntity),
    __metadata("design:type", transaction_type_lookup_entity_1.TransactionTypeEntity)
], FinanceLogEntity.prototype, "transactionType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category1_lookup_entity_1.Category1Entity),
    __metadata("design:type", category1_lookup_entity_1.Category1Entity)
], FinanceLogEntity.prototype, "category1", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category2_lookup_entity_1.Category2Entity),
    __metadata("design:type", category2_lookup_entity_1.Category2Entity)
], FinanceLogEntity.prototype, "category2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category3_lookup_entity_1.Category3Entity),
    __metadata("design:type", category3_lookup_entity_1.Category3Entity)
], FinanceLogEntity.prototype, "category3", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision" }),
    __metadata("design:type", Number)
], FinanceLogEntity.prototype, "ammount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FinanceLogEntity.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => planned_lookup_entity_1.PlannedEntity),
    __metadata("design:type", planned_lookup_entity_1.PlannedEntity)
], FinanceLogEntity.prototype, "planned", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rating_lookup_entity_1.RatingEntity),
    __metadata("design:type", rating_lookup_entity_1.RatingEntity)
], FinanceLogEntity.prototype, "rating", void 0);
FinanceLogEntity = __decorate([
    (0, typeorm_1.Entity)({ schema: 'vishkifinance', name: 'financial_log' })
], FinanceLogEntity);
exports.FinanceLogEntity = FinanceLogEntity;
//# sourceMappingURL=finance-log.entity.js.map