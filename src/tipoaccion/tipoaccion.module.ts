import { Module } from '@nestjs/common';
import { TipoaccionService } from './tipoaccion.service';
import { TipoaccionController } from './tipoaccion.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule], 
  controllers: [TipoaccionController],
  providers: [TipoaccionService],
})
export class TipoaccionModule {}
