import { Injectable, Logger } from '@nestjs/common';
import { Chat } from './chat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {v4 as uuid} from 'uuid';
import { ChatType } from './chat.type';
import { CustomerType } from '../customer/customer_type';
import { customer } from '../customer/customer.entity';


@Injectable()
export class ChatService {
  saveUsers(): string {
    throw new Error("Method not implemented.");
  }
    private logger: Logger = new Logger('ChatService');

    constructor(
        @InjectRepository(Chat) private chatRepository: Repository<Chat>,
        @InjectRepository(customer) private customerRepository: Repository<customer>,
    ){}

    async insertChat(name, message): Promise<Chat> {
        const chat = this.chatRepository.create({id: uuid(),name, message});
        return this.chatRepository.save(chat);
    }

    async getChats(id): Promise<Chat> {
        return this.chatRepository.findOne(id);
    }

    async getAllchats() : Promise<ChatType[]> {
        console.log("im here!!!")
        return this.chatRepository.find();
    }

     async login(createloginDto){
        let userData  =  this.customerRepository.find({username: createloginDto.username , password: createloginDto.password });

        let data = {};
        if (typeof userData !== 'undefined' && (await userData).length > 0) {
            data["username"] = createloginDto.username ;
            data["status"] = true ;
            return data;
        }else{
            return data;
        }
       
    }   

}
