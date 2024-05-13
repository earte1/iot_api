import { Module } from '@nestjs/common';
import { NovedadregistroService } from './novedadregistro.service';
import { NovedadregistroController } from './novedadregistro.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [NovedadregistroController],
  providers: [NovedadregistroService],
})
export class NovedadregistroModule {}
