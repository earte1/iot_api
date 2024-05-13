import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UbicacionController } from './ubicacion.controller';
import { UbicacionService } from './ubicacion.service';

@Module({
  imports:[DatabaseModule],
  controllers: [UbicacionController],
  providers: [UbicacionService],
})
export class UbicacionModule {}

