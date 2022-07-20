"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema1657334344381 = void 0;
class createSchema1657334344381 {
    async up(queryRunner) {
        await queryRunner.createSchema('vishkifinance');
    }
    async down(queryRunner) {
        await queryRunner.dropSchema('vishkifinance');
    }
}
exports.createSchema1657334344381 = createSchema1657334344381;
//# sourceMappingURL=1657334344381-createSchema.js.map