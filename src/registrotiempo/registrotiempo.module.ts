import { Module } from '@nestjs/common';
import { RegistrotiempoService } from './registrotiempo.service';
import { RegistrotiempoController } from './registrotiempo.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [RegistrotiempoController],
  providers: [RegistrotiempoService],
})
export class RegistrotiempoModule {}
