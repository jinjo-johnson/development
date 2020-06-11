import { Controller, Post, Body, ValidationPipe, UseGuards } from '@nestjs/common';
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
    signUp(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto): Promise<void> {
        return this.authService.signup(authCredentialDto);
    }

    @Post('/signIn')
    signIn(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto){
        console.log("signin!!!")
        return this.authService.signIn(authCredentialDto);
    }

    // @Post('/test')
    // @UseGuards(AuthGuard())
    // test(@GetUser() user:User) {
    //     console.log(user)
    // }

}
