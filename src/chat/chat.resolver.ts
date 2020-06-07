import {Resolver, Query, Mutation, Args} from '@nestjs/graphql'
import { ChatType } from './chat.type';
import { ChatService } from './chat.service';



@Resolver(of => ChatType)
export class ChatResolver {
    constructor(
        private ChatService: ChatService
    ){}

    @Query(returns => ChatType)
    chats(
        @Args('id') id : string,
    ){
        return this.ChatService.getChats({id})
    }

    @Mutation( returns => ChatType)
    insertChat(        
        @Args('name') name : string,
        @Args('message') message:String) {
            return this.ChatService.insertChat(name,message);
    }
}