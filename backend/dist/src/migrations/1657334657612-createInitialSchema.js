"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInitialSchema1657334657612 = void 0;
class createInitialSchema1657334657612 {
    constructor() {
        this.name = 'createInitialSchema1657334657612';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "neerajadesigns"."Product" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "isActive" boolean NOT NULL, "description" character varying(4000) NOT NULL, "imagePaths" text NOT NULL, "categoryId" integer, CONSTRAINT "PK_9fc040db7872192bbc26c515710" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "neerajadesigns"."Category" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "isActive" boolean NOT NULL, "description" character varying(4000) NOT NULL, "imagePath" character varying(1000) NOT NULL, CONSTRAINT "PK_c2727780c5b9b0c564c29a4977c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "neerajadesigns"."Product" ADD CONSTRAINT "FK_896e2e0f6dfa6f80117a79e1d7e" FOREIGN KEY ("categoryId") REFERENCES "neerajadesigns"."Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "neerajadesigns"."Product" DROP CONSTRAINT "FK_896e2e0f6dfa6f80117a79e1d7e"`);
        await queryRunner.query(`DROP TABLE "neerajadesigns"."Category"`);
        await queryRunner.query(`DROP TABLE "neerajadesigns"."Product"`);
    }
}
exports.createInitialSchema1657334657612 = createInitialSchema1657334657612;
//# sourceMappingURL=1657334657612-createInitialSchema.js.map