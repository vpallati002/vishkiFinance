"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category2Entity = void 0;
const typeorm_1 = require("typeorm");
const lookup_entity_1 = require("./lookup.entity");
let Category2Entity = class Category2Entity extends lookup_entity_1.LookupEntity {
};
Category2Entity = __decorate([
    (0, typeorm_1.Entity)({ schema: 'vishkifinance', name: 'lookup_category2' })
], Category2Entity);
exports.Category2Entity = Category2Entity;
//# sourceMappingURL=category2.lookup.entity.js.map