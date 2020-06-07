import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from '@nestjs/graphql'
import { ChatModule } from './chat/chat.module';
import { Chat } from './chat/chat.entity';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/local',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Chat
      ],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
