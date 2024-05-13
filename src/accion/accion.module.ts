import { Module } from '@nestjs/common';
import { AccionService } from './accion.service';
import { AccionController } from './accion.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [AccionController],
  providers: [AccionService],
})
export class AccionModule {}
