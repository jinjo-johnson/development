import { Controller, Post, Body, ValidationPipe, UseGuards, Get } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user-decorator';
import { User } from './user.entity';


@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
        ) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto) {
        return this.authService.signup(authCredentialDto);
    }

    @Post('/signIn')
    signIn(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto){
        return this.authService.signIn(authCredentialDto);
    }

    @Get('/getAllChats')
    getChats(){
      return this.authService.getAllchats();
    }

}
