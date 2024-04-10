import { Module } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { UbicacionController } from './ubicacion.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports:[],
  controllers: [UbicacionController],
  providers: [UbicacionService],
})
export class UbicacionModule {}
