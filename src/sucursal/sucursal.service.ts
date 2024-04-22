import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { GenericRepository } from 'src/database/generic.service';

@Injectable()
export class SucursalService extends GenericRepository<'sucursal'> {
  constructor(private readonly prisma1: DatabaseService) {
    super(prisma1);
    this.model = 'sucursal';
  }
  
}