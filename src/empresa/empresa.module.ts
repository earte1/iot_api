import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AuthMiddleware } from 'src/middleware/authverify/authverify.middleware';

@Module({
  imports:[DatabaseModule],
  controllers: [EmpresaController],
  providers: [EmpresaService],
})
export class EmpresaModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthMiddleware).forRoutes('empresa');
  }
}
