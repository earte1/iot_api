import { Module } from '@nestjs/common';
import { TiponotificacionService } from './tiponotificacion.service';
import { TiponotificacionController } from './tiponotificacion.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [TiponotificacionController],
  providers: [TiponotificacionService],
})
export class TiponotificacionModule {}
