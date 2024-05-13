import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PuestoController } from './puesto.controller';
import { PuestoService } from './puesto.service';

@Module({
  imports:[DatabaseModule],
  controllers: [PuestoController],
  providers: [PuestoService],
})
export class PuestoModule {}
