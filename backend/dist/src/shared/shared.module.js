"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const entity_module_1 = require("../entity/entity.module");
const lookup_controller_1 = require("./lookup/lookup.controller");
const lookup_service_1 = require("./lookup/lookup.service");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0, common_1.Module)({
        imports: [entity_module_1.EntityModule],
        providers: [lookup_service_1.LookupService],
        controllers: [lookup_controller_1.LookupController],
        exports: [lookup_service_1.LookupService],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map