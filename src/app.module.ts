import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from '@nestjs/graphql'
import { ChatModule } from './chat/chat.module';
import { Chat } from './chat/chat.entity';
import { AppGateway } from './app.gateway';
import { customer } from './customer/customer.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/local',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Chat,
        customer,
        User
      ],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    ChatModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
