import { DatabaseService } from 'src/database/database.service';
import { Injectable } from '@nestjs/common';
import {Prisma } from '@prisma/client';
import { BadRequestError, Ok } from 'src/shared/funciones';
import * as dotenv from 'dotenv';

@Injectable()
export class EmpresaService {

  constructor(private readonly dbService: DatabaseService) {
    dotenv.config();
  }

  async create(createEmpresaDto: Prisma.empresaCreateInput) {
    if(createEmpresaDto.empresaid === process.env.EMPRESA_ID) {
      return Ok(this.dbService.empresa.create({
        data: createEmpresaDto
      }));
    }
    return BadRequestError("Estas intentando devolver un valor no permitido");
      
  }

  async findAll() {
    //console.log(process.env.EMPRESA_ID)
    const data = await this.dbService.empresa.findMany({
      where: {empresaid: process.env.EMPRESA_ID}
    });
    //console.log(data);
    return Ok(data);
  }

  async findOne(id: string) {
    return this.dbService.empresa.findUnique({
      where: {empresaid: process.env.EMPRESA_ID}
    })
  }

  async update(id: string, updateEmpresaDto: Prisma.empresaUpdateInput) {
    return this.dbService.empresa.update({
      where: {empresaid: process.env.EMPRESA_ID},
      data: updateEmpresaDto
    })
  }

  async remove(id: string) {
    return this,this.dbService.empresa.delete({
      where: {empresaid: process.env.EMPRESA_ID}
    })
  }
}
