import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class tableUser1609608912612 implements MigrationInterface {
  tableName: string;

  constructor() {
    this.tableName = 'users'
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: this.tableName,
      columns: [
        { 
          name: 'id', 
          type: 'uuid', 
          isPrimary: true, 
          generationStrategy: 'uuid',
          default: 'generate_uuid_v4()' 
        },
        {
          name: 'first_name',
          type: 'varchar',
        },
        {
          name: 'last_name',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'biography',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'password',
          type: 'varchar'
        },
        {
          name: 'birth_date',
          type: 'timestamp'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
          isUnique: true
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
          isUnique: true
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable(this.tableName)
  }
}
