import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Shorturl {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    origin_url: string

    @Column()
    random_code: string

}
