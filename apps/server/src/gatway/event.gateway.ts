import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway(3001, {
    cors: {
        origin: '*',
    },
})
export class EventGateway {
    @WebSocketServer()
    server: Server
    handleConnection(client: Socket) {
        console.log('someone connected' + client.id);
    }

    handleDisconnect(client: Socket) {
    }

    @SubscribeMessage('newMessage')
    handleMessage(@MessageBody() body: any, @ConnectedSocket() client: Socket) {
        // client.emit('onMessage')
        this.server.emit('onMessage', {
            msg: 'new Message',
            content: body
        })
        console.log(body);
    }
}