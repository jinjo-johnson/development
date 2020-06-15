import { Controller, Get, Body, Post, Logger, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ChatService } from './chat/chat.service';
import { CreateloginDto } from './create-login.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller()
// @UseGuards(AuthGuard())
export class AppController {
  private logger: Logger = new Logger('AppController');
  constructor(
    private readonly appService: AppService,
    private readonly chatService: ChatService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/login")
  async login(@Body() createloginDto: CreateloginDto) {
    return this.chatService.login(createloginDto);
  }

  @Get("/getAllChats")
  async getAllchats() {
    return this.chatService.getAllchats();
  }
}



