import { Module } from '@nestjs/common';
import { SchemaestructuraService } from './schemaestructura.service';
import { SchemaestructuraController } from './schemaestructura.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [SchemaestructuraController],
  providers: [SchemaestructuraService],
})
export class SchemaestructuraModule {}
