import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaController } from './tarea.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [TareaController],
  providers: [TareaService],
})
export class TareaModule {}
