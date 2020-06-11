import {ObjectType, Field, ID} from '@nestjs/graphql'

@ObjectType('customer')
export class CustomerType {
    @Field(type => ID)
    id:string;

    @Field()
    username:string;

    @Field()
    password:string;
}