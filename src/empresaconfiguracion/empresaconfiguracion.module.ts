import { Module } from '@nestjs/common';
import { EmpresaconfiguracionService } from './empresaconfiguracion.service';
import { EmpresaconfiguracionController } from './empresaconfiguracion.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [EmpresaconfiguracionController],
  providers: [EmpresaconfiguracionService],
})
export class EmpresaconfiguracionModule {}
