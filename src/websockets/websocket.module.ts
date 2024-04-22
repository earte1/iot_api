import { DatabaseService } from 'src/database/database.service';
import { Module } from "@nestjs/common";
import { WebsocketGateway } from "./websocket.gateway";
import { EventoService } from "src/evento/evento.service";
import { EquipoService } from "src/equipo/equipo.service";
import { UbicacionService } from "src/ubicacion/ubicacion.service";
import {Prisma } from '@prisma/client';


@Module({
    providers: [WebsocketGateway, EventoService, EquipoService, UbicacionService, DatabaseService]
})
export class GatewayModule {

}