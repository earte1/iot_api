import { Module } from '@nestjs/common';
import { ApiheadersService } from './apiheaders.service';
import { ApiheadersController } from './apiheaders.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [ApiheadersController],
  providers: [ApiheadersService],
})
export class ApiheadersModule {}
