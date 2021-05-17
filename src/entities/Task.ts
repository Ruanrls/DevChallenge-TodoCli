import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity()
class Task {

    @PrimaryColumn()
    id: string;

    @Column({ length: 50 })
    description: string;

    @Column({ default: new Date().toISOString() })
    creation_date: string;

    @Column()
    date_limit: string;

    @Column({ length: 10, default: 'pending' })
    status: string;

    @Column()
    priority: number;

    constructor() {

        if (!this.id) {
            this.id = uuid()
        }

        if (this.date_limit) {
            this.date_limit = new Date(this.date_limit).toISOString()
        }

    }
}

export { Task }