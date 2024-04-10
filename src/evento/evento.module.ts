import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [],
  controllers: [EventoController],
  providers: [EventoService],
})
export class EventoModule {}
