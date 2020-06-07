import { Injectable } from '@nestjs/common';
import { Chat } from './chat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {v4 as uuid} from 'uuid';

@Injectable()
export class ChatService {

    constructor(
        @InjectRepository(Chat) private chatRepository: Repository<Chat>,
    ){}

    async insertChat(name, message): Promise<Chat> {
        const chat = this.chatRepository.create({id: uuid(),name, message});
        return this.chatRepository.save(chat);
    }

    async getChats(id): Promise<Chat> {
        return this.chatRepository.findOne(id);
    }
}
