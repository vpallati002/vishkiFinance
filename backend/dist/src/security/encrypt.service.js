"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
let EncryptService = class EncryptService {
    async hashPassword(password, saltRounds = 10) {
        try {
            const salt = await (0, bcrypt_1.genSalt)(saltRounds);
            return await (0, bcrypt_1.hash)(password, salt);
        }
        catch (error) {
            console.log(error);
        }
        return null;
    }
    async comparePassword(password, hash) {
        try {
            return await (0, bcrypt_1.compare)(password, hash);
        }
        catch (error) {
            console.log(error);
        }
        return false;
    }
    async encodeToken(tokenInput) {
        try {
            let token = Buffer.from(tokenInput).toString('base64');
            return token.toString();
        }
        catch (error) {
            console.log(error);
        }
        return '';
    }
    async decodeToken(encodedToken) {
        try {
            let tokenText = Buffer.from(encodedToken, 'base64').toString('ascii');
            return tokenText;
        }
        catch (error) {
            console.log(error);
        }
        return null;
    }
};
EncryptService = __decorate([
    (0, common_1.Injectable)()
], EncryptService);
exports.EncryptService = EncryptService;
//# sourceMappingURL=encrypt.service.js.map