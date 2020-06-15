import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger: Logger = new Logger('AppService');
  getHello(): string {
    return 'wellcome to Chat App';
  }
}
