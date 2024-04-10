import { OnModuleInit } from '@nestjs/common';
import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from '@nestjs/websockets';
import { evento } from '@prisma/client';
import { Server, Socket } from 'socket.io';
import { EventoService } from 'src/evento/evento.service';
import { v4 } from 'uuid';
@WebSocketGateway()
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {
    @WebSocketServer()
    server: Server;

    constructor(
        private pEvento: EventoService,
        //private pUbicacion: UbicacionService,
        //private pEquipo: EquipoService
    ) { }

    async handleConnection(client: Socket, ...args: any[]) {
        console.log(`Cliente conectado ${client.id}`);
        const { name, token } = client.handshake.auth;
        /*if ( !name ) {
            client.disconnect();
            return;
        }*/
        // Guardar evento de conexión
        var __evento__:evento = {
            eventoid: v4(),
            empresaid: '',
            equipoid: '',
            fecha: new Date(),
            es_coneccion: true,
            detalle_mensaje: undefined

        }
        console.log(__evento__)
        //await this.pEvento.create(__evento__);
    }
    
    async handleDisconnect(client: Socket) {
        console.log(`Cliente desconectado ${client.id}`);
        // Guardar evento de desconexión
        //await this.pEvento.update(client.id, false);
    }


    // manejando los mensajes normales que se envian
    @SubscribeMessage('message')
    handlerMessage(@MessageBody() data: any) {
        this.server.emit('serverMessage', data);
    }

    @SubscribeMessage('broadcast')
    handlerBroadcastMessage(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
        console.log(data);
        client.broadcast.emit('broadcastMessage', data);
    }

    async onModuleInit() {
        await this.createChannels();
    }

    @SubscribeMessage('handshake')
    async handleHandshake(@MessageBody() data: any, socket: Socket) {
        // Verificar si el nombre del equipo existe en la base de datos
        /*const equipo = await this.pEquipo.findUnique({ where: { nombre: data.nombre } });
        if (!equipo) {
            socket.disconnect(); // Cerrar conexión si no se encuentra el equipo
            return;
        }*/

        // Obtener la ubicación del equipo desde la base de datos
        //const ubicacion = await this.prisma.ubicacion.findUnique({ where: { id: equipo.ubicacionId } });

        // Suscribir al canal correspondiente
        //socket.join(ubicacion.canal);

        // Enviar mensaje de confirmación al cliente
        socket.emit('handshake', 'Conexión establecida correctamente');
    }

    // Función para enviar un mensaje a todos los clientes en un canal
    sendToChannel(channel: string, event: string, data: any) {
        this.server.to(channel).emit(event, data);
    }

    // Función para enviar un mensaje a un cliente específico
    sendToClient(clientId: string, event: string, data: any) {
        this.server.to(clientId).emit(event, data);
    }

    async createChannels() {
        //const ubicaciones = await this.prisma.ubicacion.findMany();
        //ubicaciones.forEach(ubicacion => {
        //    this.server.of('/').adapter.addRooms(new Set([ubicacion.canal])); // Añadir el canal a los rooms disponibles
        //});
    }
}


