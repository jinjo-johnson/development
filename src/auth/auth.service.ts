import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtService } from '@nestjs/jwt';
// import { JwtPayload } from '../../dist/auth/jwt-payload.interface';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository) private UserRepository: UserRepository,
        private jwtService : JwtService,
    ){}

    async signup(authCredentialDto:AuthCredentialDto): Promise<void>{
        return this.UserRepository.signup(authCredentialDto);
    }




    async signIn(authCredentialDto:AuthCredentialDto){
        const username =  await this.UserRepository.signIn(authCredentialDto);
        return this.UserRepository.signIn(authCredentialDto);
     }
}
