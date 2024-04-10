import { Injectable } from '@nestjs/common';
import {Prisma } from '@prisma/client';

@Injectable()
export class UbicacionService {
  create(createUbicacionDto: Prisma.ubicacionCreateInput) {
    return 'This action adds a new ubicacion';
  }

  findAll() {
    return `This action returns all ubicacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ubicacion`;
  }

  update(id: number, updateUbicacionDto: Prisma.ubicacionUpdateInput) {
    return `This action updates a #${id} ubicacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} ubicacion`;
  }
}
