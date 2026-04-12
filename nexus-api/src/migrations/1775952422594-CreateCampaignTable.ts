import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCampaignTable1775952422594 implements MigrationInterface {
    name = 'CreateCampaignTable1775952422594'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "campaigns" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "availableRegions" text NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "campaigns"`);
    }

}
