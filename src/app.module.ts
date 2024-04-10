import { Module } from '@nestjs/common';
import { GatewayModule } from './websockets/websocket.module';
import { DatabaseModule } from './database/database.module';
import { EmpresaModule } from './empresa/empresa.module';
import { EventoModule } from './evento/evento.module';
import { EquipoModule } from './equipo/equipo.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';


@Module({
  imports: [GatewayModule, DatabaseModule, EmpresaModule, EventoModule, EquipoModule, UbicacionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
