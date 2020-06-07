import {Entity, ObjectIdColumn, PrimaryColumn, Column} from 'typeorm';

@Entity()

export class Chat{
    @ObjectIdColumn()
    _id:string;

    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    message:string; 
}