import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DepartamentoController } from './departamento.controller';
import { DepartamentoService } from './departamento.service';

@Module({
  imports:[DatabaseModule],
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
})
export class DepartamentoModule {}
