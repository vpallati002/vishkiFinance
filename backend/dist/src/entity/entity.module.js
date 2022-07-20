"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const account_lookup_entity_1 = require("./account.lookup.entity");
const by_lookup_entity_1 = require("./by.lookup.entity");
const category1_lookup_entity_1 = require("./category1.lookup.entity");
const category2_lookup_entity_1 = require("./category2.lookup.entity");
const category3_lookup_entity_1 = require("./category3.lookup.entity");
const finance_log_entity_1 = require("./finance-log.entity");
const for_lookup_entity_1 = require("./for.lookup.entity");
const planned_lookup_entity_1 = require("./planned.lookup.entity");
const rating_lookup_entity_1 = require("./rating.lookup.entity");
const transaction_type_lookup_entity_1 = require("./transaction_type.lookup.entity");
let EntityModule = class EntityModule {
};
EntityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                finance_log_entity_1.FinanceLogEntity,
                by_lookup_entity_1.ByEntity,
                for_lookup_entity_1.ForEntity,
                category1_lookup_entity_1.Category1Entity,
                category2_lookup_entity_1.Category2Entity,
                category3_lookup_entity_1.Category3Entity,
                transaction_type_lookup_entity_1.TransactionTypeEntity,
                planned_lookup_entity_1.PlannedEntity,
                rating_lookup_entity_1.RatingEntity,
                account_lookup_entity_1.AccountEntity
            ]),
        ],
        exports: [typeorm_1.TypeOrmModule],
    })
], EntityModule);
exports.EntityModule = EntityModule;
//# sourceMappingURL=entity.module.js.map