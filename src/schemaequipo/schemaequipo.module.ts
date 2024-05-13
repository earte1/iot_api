import { Module } from '@nestjs/common';
import { SchemaequipoService } from './schemaequipo.service';
import { SchemaequipoController } from './schemaequipo.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [SchemaequipoController],
  providers: [SchemaequipoService],
})
export class SchemaequipoModule {}
