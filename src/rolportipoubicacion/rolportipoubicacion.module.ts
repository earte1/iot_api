import { Module } from '@nestjs/common';
import { RolportipoubicacionService } from './rolportipoubicacion.service';
import { RolportipoubicacionController } from './rolportipoubicacion.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [RolportipoubicacionController],
  providers: [RolportipoubicacionService],
})
export class RolportipoubicacionModule {}
