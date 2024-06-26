import { Injectable } from '@nestjs/common';
import {Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { GenericRepository } from 'src/database/generic.service';

@Injectable()
export class EventoService extends GenericRepository<'equipo'> {
  constructor(private readonly prisma1: DatabaseService) {
    super(prisma1);
    this.model = 'equipo';
  }
  
}
