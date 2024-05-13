import { Module } from '@nestjs/common';
import { TiempoService } from './tiempo.service';
import { TiempoController } from './tiempo.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [TiempoController],
  providers: [TiempoService],
})
export class TiempoModule {}
