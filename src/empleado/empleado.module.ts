import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [EmpleadoController],
  providers: [EmpleadoService],
})
export class EmpleadoModule {}
