import { Module } from '@nestjs/common';
import { GatewayModule } from './websockets/websocket.module';
import { DatabaseModule } from './database/database.module';
import { EmpresaModule } from './empresa/empresa.module';
import { EventoModule } from './evento/evento.module';
import { EquipoModule } from './equipo/equipo.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { TareaModule } from './tarea/tarea.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { RolModule } from './rol/rol.module';
import { PuestoModule } from './puesto/puesto.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { NumerodocumentoModule } from './numerodocumento/numerodocumento.module';
import { TiempoModule } from './tiempo/tiempo.module';
import { UbicacionempleadoModule } from './ubicacionempleado/ubicacionempleado.module';
import { TiponotificacionModule } from './tiponotificacion/tiponotificacion.module';
import { TipoubicacionModule } from './tipoubicacion/tipoubicacion.module';
import { NovedadregistroModule } from './novedadregistro/novedadregistro.module';
import { RegistrotiempoModule } from './registrotiempo/registrotiempo.module';
import { TipoequipoModule } from './tipoequipo/tipoequipo.module';
import { RolportipoubicacionModule } from './rolportipoubicacion/rolportipoubicacion.module';
import { SchemaestructuraModule } from './schemaestructura/schemaestructura.module';
import { TareadiaModule } from './tareadia/tareadia.module';
import { TareaubicacionModule } from './tareaubicacion/tareaubicacion.module';
import { TipoequipotiempoModule } from './tipoequipotiempo/tipoequipotiempo.module';
import { EmpresaconfiguracionModule } from './empresaconfiguracion/empresaconfiguracion.module';
import { TipoaccionModule } from './tipoaccion/tipoaccion.module';
import { EquipoentradasalidaModule } from './equipoentradasalida/equipoentradasalida.module';
import { SchemaequipoModule } from './schemaequipo/schemaequipo.module';
import { AccionModule } from './accion/accion.module';
import { ApiModule } from './api/api.module';
import { ApiheadersModule } from './apiheaders/apiheaders.module';
import { ApimetodosModule } from './apimetodos/apimetodos.module';


@Module({
  imports: [GatewayModule, DatabaseModule, EmpresaModule, EventoModule, EquipoModule, UbicacionModule, SucursalModule, TareaModule, DepartamentoModule, RolModule, PuestoModule, EmpleadoModule, NumerodocumentoModule, TiempoModule, UbicacionempleadoModule, TiponotificacionModule, TipoubicacionModule, NovedadregistroModule, RegistrotiempoModule, TipoequipoModule, RolportipoubicacionModule, SchemaestructuraModule, TareadiaModule, TareaubicacionModule, TipoequipotiempoModule, EmpresaconfiguracionModule, TipoaccionModule, EquipoentradasalidaModule, SchemaequipoModule, AccionModule, ApiModule, ApiheadersModule, ApimetodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
