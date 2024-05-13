import { Module } from '@nestjs/common';
import { UbicacionempleadoService } from './ubicacionempleado.service';
import { UbicacionempleadoController } from './ubicacionempleado.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [UbicacionempleadoController],
  providers: [UbicacionempleadoService],
})
export class UbicacionempleadoModule {}
