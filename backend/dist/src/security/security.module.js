"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const encrypt_service_1 = require("./encrypt.service");
const shared_module_1 = require("../shared/shared.module");
const entity_module_1 = require("../entity/entity.module");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule, entity_module_1.EntityModule],
        providers: [users_service_1.UsersService, encrypt_service_1.EncryptService],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService, encrypt_service_1.EncryptService],
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=security.module.js.map