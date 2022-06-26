import { MigrationInterface, QueryRunner } from 'typeorm';

export class CourseRefactoring1655370931255 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Courses" RENAME COLUMN "name" TO "course"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Courses" RENAME COLUMN "course" TO "name"`,
    );
  }
}
