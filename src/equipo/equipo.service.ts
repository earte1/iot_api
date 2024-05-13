import { Injectable } from '@nestjs/common';
import  { Prisma } from '@prisma/client';
//import {Prisma } from '@prisma/client';
import { BadRequestError, Ok } from 'src/shared/funciones';
import * as dotenv from 'dotenv';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EquipoService {
  constructor(private readonly dbService: DatabaseService) {
    dotenv.config();
  }

  async create(createequipoDto: Prisma.equipoCreateInput) {
    //if(createequipoDto.empresaid === process.env.equipo_ID) {
      
    return Ok(this.dbService.equipo.create({
        data: createequipoDto
      }));
    //}
    //return BadRequestError("Estas intentando devolver un valor no permitido");
      
  }

  async findAll() {
    //console.log(process.env.equipo_ID)
    const data = await this.dbService.equipo.findMany({
      where: {empresaid: process.env.EMPRESA_ID}
    });
    //console.log(data);
    return Ok(data);
  }

  async findOne(id: string) {
    return this.dbService.equipo.findUnique({
      where: {
        equipoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    })
  }

  async update(id: string, updateequipoDto: Prisma.equipoUpdateInput) {
    return this.dbService.equipo.update({
      where: {
        equipoid: id,
        empresaid: process.env.EMPRESA_ID
      },
      data: updateequipoDto
    })
  }

  async remove(id: string) {
    return this.dbService.equipo.delete({
      where: 
      {
        equipoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    })
  }
}
