import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { RegistrotiempoService } from './registrotiempo.service';


@Controller('registrotiempo')
export class RegistrotiempoController {
  private registrotiempoService: RegistrotiempoService;

  constructor( ) {
    this.registrotiempoService = new RegistrotiempoService(new DatabaseService());
  }

  @Post()
  create(@Body() createRegistrotiempoDto: Prisma.registrotiempoCreateInput) {
    return this.registrotiempoService.create({
      data: createRegistrotiempoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.registrotiempoService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.registrotiempoService.findUniqueOrThrow({
      where: {
        registroid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateRegistrotiempoDto: Prisma.registrotiempoUpdateInput) {
    return this.registrotiempoService.update({
      where: { 
        registroid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateRegistrotiempoDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrotiempoService.delete({
      where: {
        registroid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
