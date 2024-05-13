import { Module } from '@nestjs/common';
import { ApimetodosService } from './apimetodos.service';
import { ApimetodosController } from './apimetodos.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [ApimetodosController],
  providers: [ApimetodosService],
})
export class ApimetodosModule {}
