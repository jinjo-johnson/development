import {ObjectType, Field, ID} from '@nestjs/graphql'

@ObjectType('chat')
export class ChatType {
    @Field(type => ID)
    id:string;

    @Field()
    name:string;

    @Field()
    message:string;
}