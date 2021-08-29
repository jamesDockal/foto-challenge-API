import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Images1630199183590 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: "image_url",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "image",
            type: "mediumblob",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("images");
  }
}
