import { Module } from '@nestjs/common';
import { NumeroDocumentoService } from './numerodocumento.service';
import { NumeroDocumentoController } from './numerodocumento.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [NumeroDocumentoController],
  providers: [NumeroDocumentoService],
})
export class NumerodocumentoModule {}
