import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import {ChatResolver} from './chat/chat.resolver';
import { ChatService } from './chat/chat.service';


@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  private logger: Logger = new Logger('AppGateway');
  constructor(
    public ChatResolver: ChatResolver,
    public ChatService: ChatService
){}

  @WebSocketServer() wss: Server;
  afterInit(server: Server) {
    this.logger.log('AppGateway : Initialized!');
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnect: ${client.id}`);
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    // client.broadcast.emit('connections',Object.keys(io.sockets.connected).length);
  }
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text: any): void {
    let name = `${text.name}`, message = `${text.message}`;
    this.ChatResolver.insertChat(name, message);
    let data = { name : name, message : message};
    client.broadcast.emit('chat-message', (data));
  }

  @SubscribeMessage('joined')
  joined(client: Socket, text: any): void {
    let data = { name : text};
    client.broadcast.emit('joined', (data));
  }

  @SubscribeMessage('chat-message')
  chatMsg(client: Socket, text: any): void {
    let name = `${text.user}`, message = `${text.message}`;
    this.ChatResolver.insertChat(name, message);
    let data = { user : name, message : message};
    client.broadcast.emit('chat-message', (data));
  }



}
