import { PassportStrategy} from  '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { validate } from 'class-validator';
import { JwtPayload } from '../../dist/auth/jwt.payload.interface';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository) private UserRepository: UserRepository,
    ) {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: 'test_007',
            }
        );
    }
    async validate(payload: JwtPayload): Promise<User> {
        const { username } = payload; 
        const user = await this.UserRepository.findOne({username});
        if(!user) {
            throw new UnauthorizedException();
        }

        return user;
    }

}