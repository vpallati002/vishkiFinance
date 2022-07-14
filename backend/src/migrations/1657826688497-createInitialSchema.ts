import { ByEntity } from "../entity/by.lookup.entity";
import { Category1Entity } from "../entity/category1.lookup.entity";
import { Category2Entity } from "../entity/category2.lookup.entity";
import { ForEntity } from "../entity/for.lookup.entity";
import { PlannedEntity } from "../entity/planned.lookup.entity";
import { RatingEntity } from "../entity/rating.lookup.entity";
import { BySeed, ForSeed, TransactionTypeSeed, PlannedSeed, RatingSeed, Category1Seed, Category2Seed, AccountSeed } from "../entity/seed";
import { TransactionTypeEntity } from "../entity/transaction_type.lookup.entity";
import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { AccountEntity } from "../entity/account.lookup.entity";


export class createInitialSchema1657826688497 implements MigrationInterface {
    name = 'createInitialSchema1657826688497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vishkifinance"."lookup_account" ("id" SERIAL NOT NULL, "name" character varying(255), "isActive" boolean NOT NULL, "sortOrder" integer NOT NULL, CONSTRAINT "PK_ac9d09d5ba74ffe77094dd1964c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vishkifinance"."lookup_category1" ("id" SERIAL NOT NULL, "name" character varying(255), "isActive" boolean NOT NULL, "sortOrder" integer NOT NULL, CONSTRAINT "PK_5e46e58e9d93a033bea53dd2b75" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vishkifinance"."lookup_by" ("id" SERIAL NOT NULL, "name" character varying(255), "isActive" boolean NOT NULL, "sortOrder" integer NOT NULL, CONSTRAINT "PK_043b5bfb5b18984fefc474cffe7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vishkifinance"."lookup_category2" ("id" SERIAL NOT NULL, "name" character varying(255), "isActive" boolean NOT NULL, "sortOrder" integer NOT NULL, CONSTRAINT "PK_57d25dc24f55dbb3d5a48448942" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vishkifinance"."lookup_category3" ("id" SERIAL NOT NULL, "name" character varying(255), "isActive" boolean NOT NULL, "sortOrder" integer NOT NULL, CONSTRAINT "PK_a45791d74f0bc7387332b232030" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vishkifinance"."lookup_for" ("id" SERIAL NOT NULL, "name" character varying(255), "isActive" boolean NOT NULL, "sortOrder" integer NOT NULL, CONSTRAINT "PK_dbd3fb04cb657ef3f9d7b0dcc1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vishkifinance"."lookup_planned" ("id" SERIAL NOT NULL, "name" character varying(255), "isActive" boolean NOT NULL, "sortOrder" integer NOT NULL, CONSTRAINT "PK_f48983dd1fd89a3757a01c9c3de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vishkifinance"."lookup_rating" ("id" SERIAL NOT NULL, "name" character varying(255), "isActive" boolean NOT NULL, "sortOrder" integer NOT NULL, CONSTRAINT "PK_77063c156f90b76f0f2f1b8b26b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vishkifinance"."lookup_transaction_type" ("id" SERIAL NOT NULL, "name" character varying(255), "isActive" boolean NOT NULL, "sortOrder" integer NOT NULL, CONSTRAINT "PK_cc5aad12454e0dfbcf1ab3cedfa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vishkifinance"."financial_log" ("id" SERIAL NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL, "ammount" double precision NOT NULL, "review" character varying, "accountId" integer, "byId" integer, "forId" integer, "transactionTypeId" integer, "category1Id" integer, "category2Id" integer, "category3Id" integer, "plannedId" integer, "ratingId" integer, CONSTRAINT "PK_d337d0712bdb2cf8726a7047cfa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" ADD CONSTRAINT "FK_3826843ff57896f31ca512d245a" FOREIGN KEY ("accountId") REFERENCES "vishkifinance"."lookup_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" ADD CONSTRAINT "FK_9512403547cacde3eac910928d5" FOREIGN KEY ("byId") REFERENCES "vishkifinance"."lookup_by"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" ADD CONSTRAINT "FK_2e75ca91ba235a951f9621d5feb" FOREIGN KEY ("forId") REFERENCES "vishkifinance"."lookup_for"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" ADD CONSTRAINT "FK_5160317fc72af26742ea40b0c3b" FOREIGN KEY ("transactionTypeId") REFERENCES "vishkifinance"."lookup_transaction_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" ADD CONSTRAINT "FK_33a231a59a95fa559704fff8d46" FOREIGN KEY ("category1Id") REFERENCES "vishkifinance"."lookup_category1"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" ADD CONSTRAINT "FK_39686d6c8cb11ae806a4d6e7f15" FOREIGN KEY ("category2Id") REFERENCES "vishkifinance"."lookup_category2"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" ADD CONSTRAINT "FK_fc99ddba51ea3a32db658f488dc" FOREIGN KEY ("category3Id") REFERENCES "vishkifinance"."lookup_category3"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" ADD CONSTRAINT "FK_8c9d5ba833a9b1ee04de7c94aa5" FOREIGN KEY ("plannedId") REFERENCES "vishkifinance"."lookup_planned"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" ADD CONSTRAINT "FK_1710d2d366313db48e486035cc3" FOREIGN KEY ("ratingId") REFERENCES "vishkifinance"."lookup_rating"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);

        /*await queryRunner.query(`COMMIT`);
        await getRepository(ByEntity).save(BySeed);
        await queryRunner.query(`COMMIT`);
        await getRepository(ForEntity).save(ForSeed);
        await queryRunner.query(`COMMIT`);
        await getRepository(TransactionTypeEntity).save(TransactionTypeSeed);
        await queryRunner.query(`COMMIT`);
        await getRepository(PlannedEntity).save(PlannedSeed);
        await queryRunner.query(`COMMIT`);
        await getRepository(RatingEntity).save(RatingSeed);
        await queryRunner.query(`COMMIT`);
        await getRepository(Category1Entity).save(Category1Seed);
        await queryRunner.query(`COMMIT`);
        await getRepository(Category2Entity).save(Category2Seed);
        await queryRunner.query(`COMMIT`);
        await getRepository(AccountEntity).save(AccountSeed);
        await queryRunner.query(`COMMIT`);*/

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" DROP CONSTRAINT "FK_1710d2d366313db48e486035cc3"`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" DROP CONSTRAINT "FK_8c9d5ba833a9b1ee04de7c94aa5"`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" DROP CONSTRAINT "FK_fc99ddba51ea3a32db658f488dc"`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" DROP CONSTRAINT "FK_39686d6c8cb11ae806a4d6e7f15"`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" DROP CONSTRAINT "FK_33a231a59a95fa559704fff8d46"`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" DROP CONSTRAINT "FK_5160317fc72af26742ea40b0c3b"`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" DROP CONSTRAINT "FK_2e75ca91ba235a951f9621d5feb"`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" DROP CONSTRAINT "FK_9512403547cacde3eac910928d5"`);
        await queryRunner.query(`ALTER TABLE "vishkifinance"."financial_log" DROP CONSTRAINT "FK_3826843ff57896f31ca512d245a"`);
        await queryRunner.query(`DROP TABLE "vishkifinance"."financial_log"`);
        await queryRunner.query(`DROP TABLE "vishkifinance"."lookup_transaction_type"`);
        await queryRunner.query(`DROP TABLE "vishkifinance"."lookup_rating"`);
        await queryRunner.query(`DROP TABLE "vishkifinance"."lookup_planned"`);
        await queryRunner.query(`DROP TABLE "vishkifinance"."lookup_for"`);
        await queryRunner.query(`DROP TABLE "vishkifinance"."lookup_category3"`);
        await queryRunner.query(`DROP TABLE "vishkifinance"."lookup_category2"`);
        await queryRunner.query(`DROP TABLE "vishkifinance"."lookup_by"`);
        await queryRunner.query(`DROP TABLE "vishkifinance"."lookup_category1"`);
        await queryRunner.query(`DROP TABLE "vishkifinance"."lookup_account"`);
    }

}
