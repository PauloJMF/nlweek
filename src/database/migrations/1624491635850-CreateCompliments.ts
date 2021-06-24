import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1624491635850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table ({
            name:'compliments',
            columns:[
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true,
                },
                {
                    name: 'user_sender',
                    type: 'int',
                },
                {
                    name: 'user_receiver',
                    type: 'int',
                },
                {
                    name: 'tag_id',
                    type: 'int',
                },
                {
                    name:'message',
                    type:'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
            foreignKeys:[
                {
                    name:'FKUserSenderCompliments',
                    columnNames:['user_sender'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                },
                {
                    name:'FKUserReceiverCompliments',
                    columnNames:['user_receiver'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                },
                {
                    name:'FKTagCompliments',
                    columnNames:['tag_id'],
                    referencedTableName: 'tags',
                    referencedColumnNames: ['id'],
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('compliments')
    }

}
