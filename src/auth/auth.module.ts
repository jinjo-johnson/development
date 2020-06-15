import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ChatRepository } from 'src/chat/chat.repository';

@Module({
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: 'test_007',
      signOptions: {
        expiresIn: 3600,
      }
    }),
    TypeOrmModule.forFeature([UserRepository, ChatRepository])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [PassportModule],
})
export class AuthModule {}
