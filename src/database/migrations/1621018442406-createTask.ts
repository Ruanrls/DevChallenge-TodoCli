import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTask1621018442406 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({

                name: "task",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'description',
                        type: 'varchar(50)',
                        isNullable: false
                    },
                    {
                        name: 'creation_date',
                        type: 'datetime',
                        default: 'now()',
                        isNullable: false
                    },
                    {
                        name: 'date_limit',
                        type: 'datetime',
                        isNullable: true
                    },
                    {
                        name: 'status',
                        type: 'varchar(10)',
                        isNullable: false,
                        default: "'pending'"
                    },
                    {
                        name: 'priority',
                        type: 'integer',
                        isNullable: false
                    }
                ]

            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('task')

    }

}
