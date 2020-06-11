import {Entity, ObjectIdColumn, PrimaryColumn, Column} from 'typeorm';

@Entity()

export class customer{
    @ObjectIdColumn()
    _id:string;

    @PrimaryColumn()
    id:string;

    @Column()
    username:string;

    @Column()
    password:string; 
}