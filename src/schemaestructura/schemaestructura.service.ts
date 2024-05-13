import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { GenericRepository } from 'src/database/generic.service';

@Injectable()
export class SchemaestructuraService extends GenericRepository<'tipoequipo_schemas_estructura'> {
  constructor(private readonly prisma1: DatabaseService) {
    super(prisma1);
    this.model = 'tipoequipo_schemas_estructura';
  }
  
}
