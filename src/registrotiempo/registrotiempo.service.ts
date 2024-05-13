import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { GenericRepository } from 'src/database/generic.service';

@Injectable()
export class RegistrotiempoService extends GenericRepository<'registrotiempo'> {
  constructor(private readonly prisma1: DatabaseService) {
    super(prisma1);
    this.model = 'registrotiempo';
  }
  
}
