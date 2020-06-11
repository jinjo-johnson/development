import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger: Logger = new Logger('AppService');
  getHello(): string {
    this.logger.log('Hello World!');
    return 'Hello World!';
  }
}
