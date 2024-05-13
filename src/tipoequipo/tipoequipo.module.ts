import { Module } from '@nestjs/common';
import { TipoequipoService } from './tipoequipo.service';
import { TipoequipoController } from './tipoequipo.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [TipoequipoController],
  providers: [TipoequipoService],
})
export class TipoequipoModule {}
