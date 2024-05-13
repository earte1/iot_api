import { Module } from '@nestjs/common';
import { TipoubicacionService } from './tipoubicacion.service';
import { TipoubicacionController } from './tipoubicacion.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [TipoubicacionController],
  providers: [TipoubicacionService],
})
export class TipoubicacionModule {}
