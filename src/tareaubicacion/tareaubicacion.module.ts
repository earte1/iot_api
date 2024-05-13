import { Module } from '@nestjs/common';
import { TareaubicacionService } from './tareaubicacion.service';
import { TareaubicacionController } from './tareaubicacion.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [TareaubicacionController],
  providers: [TareaubicacionService],
})
export class TareaubicacionModule {}
