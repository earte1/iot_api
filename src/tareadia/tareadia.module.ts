import { Module } from '@nestjs/common';
import { TareadiaService } from './tareadia.service';
import { TareadiaController } from './tareadia.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [TareadiaController],
  providers: [TareadiaService],
})
export class TareadiaModule {}
