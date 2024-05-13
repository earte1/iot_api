import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { GenericRepository } from 'src/database/generic.service';

@Injectable()
export class PuestoService extends GenericRepository<'puesto'> {
  constructor(private readonly prisma1: DatabaseService) {
    super(prisma1);
    this.model = 'puesto';
  }
  
}
