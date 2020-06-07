import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  private logger: Logger = new Logger('AppGateway');

  @WebSocketServer() wss: Server;
  afterInit(server: Server) {
    this.logger.log('AppGateway : Initialized!');
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnect: ${client.id}`);
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text: any): void {
    this.logger.log(`Client msg: ${text}`);
    //this.wss.emit('message', text);
  }
}
