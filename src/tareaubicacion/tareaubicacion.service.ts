import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { GenericRepository } from 'src/database/generic.service';

@Injectable()
export class TareaubicacionService extends GenericRepository<'tarea_ubicacion'> {
  constructor(private readonly prisma1: DatabaseService) {
    super(prisma1);
    this.model = 'tarea_ubicacion';
  }
  
}
