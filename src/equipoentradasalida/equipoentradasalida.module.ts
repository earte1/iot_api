import { Module } from '@nestjs/common';
import { EquipoentradasalidaService } from './equipoentradasalida.service';
import { EquipoentradasalidaController } from './equipoentradasalida.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [EquipoentradasalidaController],
  providers: [EquipoentradasalidaService],
})
export class EquipoentradasalidaModule {}
