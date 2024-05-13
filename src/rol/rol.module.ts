import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';

@Module({
  imports:[DatabaseModule],
  controllers: [RolController],
  providers: [RolService],
})
export class RolModule {}