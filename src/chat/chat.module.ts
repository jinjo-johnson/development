import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ChatResolver} from './chat.resolver';
import { ChatService } from './chat.service';
import { Chat } from './chat.entity';
import { customer } from '../customer/customer.entity';
import { AuthModule } from '../auth/auth.module';


@Module({
    imports:[
        TypeOrmModule.forFeature([Chat,customer]),
        AuthModule
    ],
    providers:[
        ChatResolver,
        ChatService
    ],
    exports: [ChatResolver,ChatService]
})
export class ChatModule {}
