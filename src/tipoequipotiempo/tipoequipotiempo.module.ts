import { Module } from '@nestjs/common';
import { TipoequipotiempoService } from './tipoequipotiempo.service';
import { TipoequipotiempoController } from './tipoequipotiempo.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [TipoequipotiempoController],
  providers: [TipoequipotiempoService],
})
export class TipoequipotiempoModule {}
