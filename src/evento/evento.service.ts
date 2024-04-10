import { Injectable } from '@nestjs/common';
import {Prisma } from '@prisma/client';

@Injectable()
export class EventoService {
  create(createEventoDto: Prisma.eventoCreateInput) {
    return 'This action adds a new evento';
  }

  findAll() {
    return `This action returns all evento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evento`;
  }

  update(id: number, updateEventoDto: Prisma.eventoUpdateInput) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
