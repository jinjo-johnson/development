import { EntityRepository, Repository } from "typeorm";
import { Chat } from "./chat.entity";

@EntityRepository(Chat)
export class ChatRepository extends Repository<Chat> {

    listChats() : Promise<Chat[]>{
        const chats =  this.find();
        return chats;
    }
}