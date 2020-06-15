import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtService } from '@nestjs/jwt';
import { Chat } from 'src/chat/chat.entity';
import { ChatType } from 'src/chat/chat.type';
// import { JwtPayload } from '../../dist/auth/jwt-payload.interface';


@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserRepository) private UserRepository: UserRepository,
        @InjectRepository(Chat) private chatRepository: Repository<Chat>,
        private jwtService : JwtService,
    ){}

    signup(authCredentialDto:AuthCredentialDto){
        return this.UserRepository.signup(authCredentialDto);
    }

    signIn(authCredentialDto:AuthCredentialDto){
        const username =   this.UserRepository.signIn(authCredentialDto);
        return this.UserRepository.signIn(authCredentialDto);
     }

     getAllchats():  Promise<ChatType[]> {
        return this.chatRepository.find();
    }


}
